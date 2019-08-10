import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import imageCompression from 'lib/browser-image-compression/browser-image-compression';
import { UntappdService } from '../services/untappd.service';
import { UntappdMockService } from '../services/untappd-mock.service';
import { OcrSpaceService } from '../services/ocr-space.service';
import { OcrSpaceMockService } from '../services/ocr-space-mock.service';

import { forkJoin } from 'rxjs';
import { BeerDetectService } from '../services/beer-detect.service';
import { Beer } from '../models/beer.model'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageText = '';
  strippedTextArray = [];
  doneParsing = false;
  selectedBeers: string[] = [];
  beersWithRanks: Beer[] = [];

  constructor(public loadingController: LoadingController,
    public untappdService: UntappdMockService,
    public ocrSpaceService: OcrSpaceMockService,
    private beerDetectService: BeerDetectService) { }

  async imageSelected(event) {
    await this.presentLoading('Parsing image...');
    this.doneParsing = false;
    this.beersWithRanks = [];
    await this.handleImage(event).finally(async () => {
      await this.dismissLoading();
      this.doneParsing = true;
    });
  }

  async beersSelected(event) {
    await this.presentLoading('Ranking beers...');
    await this.rankBeers(event.detail.value).finally(async () => {
      await this.dismissLoading();
    });
  }

  private async handleImage(event) {
    this.selectedBeers = [];
    const file = event.target.files[0];
    
    const compressedImage = await this.compressImage(file);
    const base64 = await this.toBase64(compressedImage);
    const ocrResp = await this.ocrSpaceService.getParsedText(base64).toPromise();

    const imageText = ocrResp.ParsedResults[0].ParsedText;
    this.strippedTextArray = this.beerDetectService.getBeerSerchTerms(imageText);
  }

  private async rankBeers(beers: string[]) {
    let promises: Promise<Beer[]>[] = [];
    
    // Pepare individual search requests for each beer name
    for (const beer of beers) {
      promises.push(this.untappdService.getSearchResults(beer).toPromise());
    }

    // Get an array of each search result
    const data = await forkJoin(promises).toPromise();

    // Take the first beer from each search result store it as a beer to be used for ranking
    let beersToRank: Beer[] = [];
    data.forEach((search) => {
      beersToRank.push(search[0]);
    });

    let beersWithRanks: Beer[] = [];
    for (const beer of beersToRank) {
      // Call get getBeerInfo for each beer so in order to get the rating score
      // This is because rating_score not included with beer from search request
      const beerInfo = await this.untappdService.getBeerInfo(beer.bid).toPromise();
      if (beerInfo) {
        beersWithRanks.push(beerInfo);
      }
    }

    beersWithRanks.sort(function (a, b) {
      return b.rating_score - a.rating_score;
    });

    this.beersWithRanks = beersWithRanks;
  }

  private async compressImage(img) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    };

    return await imageCompression(img, options);
  }

  private toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  private async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: message,
    });
    await loading.present();
  }

  private async dismissLoading() {
    if (this.loadingController.getTop()) {
      await this.loadingController.dismiss();
    }
  }

}
