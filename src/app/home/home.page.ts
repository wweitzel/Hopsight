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
    await this.handleImage(event).finally(async () => {
      await this.dismissLoading();
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
    this.doneParsing = false;
    const file = event.target.files[0];
    
    const compressedImage = await this.compressImage(file);
    const base64 = await this.toBase64(compressedImage);
    const ocrResp = await this.ocrSpaceService.getParsedText(base64).toPromise();

    const imageText = ocrResp.ParsedResults[0].ParsedText;
    this.strippedTextArray = this.beerDetectService.getBeerSerchTerms(imageText);
    this.doneParsing = true;
  }

  private async rankBeers(beers: string[]) {
    let beerIds = [];
    let promises: Promise<Beer>[] = [];
    for (const beer of beers) {
      promises.push(this.untappdService.getSearchResults(beer).toPromise());
    }

    const data = await forkJoin(promises).toPromise();
    data.forEach((search) => {
      beerIds.push(search[0].bid);
    });
    
    let beersWithRanks: Beer[] = [];

    for (const beerId of beerIds) {
      const beerInfo = await this.untappdService.getBeerInfo(beerId).toPromise();
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
