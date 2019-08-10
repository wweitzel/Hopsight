import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import imageCompression from 'lib/browser-image-compression/browser-image-compression';
import { UntappdService } from '../services/untappd.service';
import { UntappdMockService } from '../services/untappd-mock.service';
import { OcrSpaceService } from '../services/ocr-space.service';
import { OcrSpaceMockService } from '../services/ocr-space-mock.service';

import { forkJoin } from 'rxjs';

const stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL",
  "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
  "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX",
  "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY");

interface BeerRank {
  name: string;
  rank: number;
}

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
  beersWithRanks: BeerRank[] = [];

  constructor(public loadingController: LoadingController,
    public untappdService: UntappdMockService,
    public ocrSpaceService: OcrSpaceMockService) { }

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

    let textAsArray = imageText.split(/\r?\n/);
    textAsArray.forEach((line) => {
      line = line.replace('...', ' ').trim();
      let lineArray = line.split(/[ ]+/);
      if (lineArray.length < 1) return;
      let strippedLine = '';
      lineArray.forEach((word) => {
        if (!word.includes('%') && !word.includes('$') && !stateList.includes(word.replace(/[()]/g, ''))) {
          strippedLine = strippedLine + word + ' ';
        }
      });
      this.strippedTextArray.push(strippedLine);
    });

    let newText = '';
    this.strippedTextArray.forEach((line) => {
      newText = newText + line + '\n';
    });

    this.imageText = newText;
    this.doneParsing = true;
  }

  private async rankBeers(beers: string[]) {
    let beerIds = [];
    let promises: Promise<any>[] = [];
    for (const beer of beers) {
      promises.push(this.untappdService.getSearchResults(beer).toPromise());
    }

    const data = await forkJoin(promises).toPromise();
    data.forEach((search) => {
      beerIds.push(search.response.beers.items[0].beer.bid);
    });

    let beersWithRanks: BeerRank[] = [];

    for (const beerId of beerIds) {
      const beerInfo = await this.untappdService.getBeerInfo(beerId).toPromise();
      if (beerInfo) {
        const beer = {
          name: beerInfo.response.beer.beer_name,
          rank: beerInfo.response.beer.rating_score
        }
        beersWithRanks.push(beer);
      }
    }

    beersWithRanks.sort(function (a, b) {
      return b.rank - a.rank;
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
