import { Component, OnInit } from '@angular/core';

import { LoadingController, MenuController } from '@ionic/angular';

import imageCompression from 'lib/browser-image-compression/browser-image-compression';
import { UntappdService, SearchResult } from '../services/untappd.service';
import { UntappdMockService } from '../services/untappd-mock.service';
import { OcrSpaceService } from '../services/ocr-space.service';
import { OcrSpaceMockService } from '../services/ocr-space-mock.service';

import { forkJoin } from 'rxjs';
import { BeerDetectService } from '../services/beer-detect.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  imageText = '';
  errorMessage = '';
  doneParsing = false;
  showGetStarted = true;
  strippedTextArray = [];
  selectedBeers: string[] = [];
  beersWithRanks: any[] = [];
  
  constructor(public loadingController: LoadingController,
    public untappdService: UntappdService,
    public ocrSpaceService: OcrSpaceService,
    public router: Router,
    private beerDetectService: BeerDetectService,
    public menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(true);
  }
  
  async imageSelected(event) {
    await this.presentLoading('Parsing image...');
    this.doneParsing = false;
    this.beersWithRanks = [];
    this.errorMessage = '';
    await this.handleImage(event).finally(async () => {
      await this.dismissLoading();
      this.doneParsing = true;
    });
  }

  async beersSelected(event) {
    await this.presentLoading('Ranking beers...');
    await this.rankBeers(event.detail.value).finally(async () => {
      await this.dismissLoading();
      this.showGetStarted = false;
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

  rowClicked(row) {
    let navigationExtras: NavigationExtras = {
      state: {
        beer: row.beer
      }
    };
    this.router.navigate(['beer-details'], navigationExtras);
  }

  private async rankBeers(beers: string[]) {
    let promises: Promise<SearchResult>[] = [];
    
    // Pepare individual search requests for each beer name
    for (const beer of beers) {
      promises.push(this.untappdService.getSearchResults(beer).toPromise());
    }

    // Get an array of each search result
    const data = await forkJoin(promises).toPromise();

    // Take the first beer from each search result store it as a beer to be used for ranking
    let beersToRank: any[] = [];
    for (let search of data) {
      if (search.searchResult.length > 0) {
        beersToRank.push({searchTerm: search.searchTerm, beer: search.searchResult[0]});
      } else {
        const stripped = this.stripAfterDash(search.searchTerm);
        if (stripped) {
          const result = await this.untappdService.getSearchResults(stripped).toPromise();
          if (result.searchResult.length > 0) {
            beersToRank.push({searchTerm: result.searchTerm, beer: result.searchResult[0]});
          } else {
            this.errorMessage = 'Not all beers could be ranked.'
          }
        } else {
          this.errorMessage = 'Not all beers could be ranked.'
        }
      }
    }

    let beersWithRanks: any[] = [];
    for (const beer of beersToRank) {
      // Call get getBeerInfo for each beer so in order to get the rating score
      // This is because rating_score not included with beer from search request
      const beerInfo = await this.untappdService.getBeerInfo(beer.beer.bid).toPromise();
      if (beerInfo) {
        beersWithRanks.push({searchTerm: beer.searchTerm, beer: beerInfo});
      }
    }

    beersWithRanks.sort(function (a, b) {
      return b.beer.rating_score - a.beer.rating_score;
    });

    this.beersWithRanks = beersWithRanks;
  }

  private stripAfterDash(text: string): string {
    let index: number = null;
    if (text.lastIndexOf(String.fromCharCode(8211)) !== -1) {
      index = text.lastIndexOf(String.fromCharCode(8211));
    } else if (text.lastIndexOf(String.fromCharCode(8212)) !== -1) {
      index = text.lastIndexOf(String.fromCharCode(8212));
    } else if (text.lastIndexOf(String.fromCharCode(8722)) !== -1) {
      index = text.lastIndexOf(String.fromCharCode(8722));
    }
    if (index) {
      return text.slice(0, index);
    } else {
      return null;
    }
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
