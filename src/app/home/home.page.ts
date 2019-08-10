import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

import imageCompression from 'lib/browser-image-compression/browser-image-compression';
import { UntappdService } from '../services/untappd.service';

import { forkJoin } from 'rxjs';
import { OcrSpaceService } from '../services/ocr-space.service';

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
  selectedBeers = [];
  doneParsing = false;

  constructor(public loadingController: LoadingController,
    public untappdService: UntappdService,
    public ocrSpaceService: OcrSpaceService) { }

  async handleImage(event) {
    this.selectedBeers = [];
    this.doneParsing = false;
    this.presentLoading('Parsing image...');
    const file = event.target.files[0];
    // console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    const compressedImage = await this.compressImage(file);
    // console.log(`compressedFile size ${compressedImage.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    const base64 = await this.toBase64(compressedImage);

    // const ocrResp = await this.ocrSpaceService.getParsedText(base64).toPromise();
    const ocrResp = {"ParsedResults":[{"TextOverlay":{"Lines":[],"HasOverlay":false,"Message":"Text overlay is not provided as it is not requested"},"TextOrientation":"0","FileParseExitCode":1,"ParsedText":"Dachnik True Helles Lager 4.4%\r\nExclusively for Dacha by DC Brau.\r\nWeihenstephaner Pilsner 5.1%\r\nStronger, more flavorful and true to the style.\r\nWeihenstephaner Hefeweizcn 5.4%\r\nHefe which all other hefes are compared to!\r\nWeihenstephaner Vitus 7.7%\r\nThe King of wheat beers. The Game Changer.\r\nWeihenstephaner Kristallweizen 5.4%\r\nRare, filtered and less filling hefe.\r\nWeihenstephaner Dunkelweizen 5.3%\r\nDarker, maltier version of our top notch hefe.\r\nWeihenstephaner Korbinian 7.4%\r\nA legendary doppelbock! Dark and very drinkable.\r\nSion Kölsch 4.8%\r\nAuthentic, crisp pale ale brewed only in Köln.\r\nSchofferhofer Grapefruit Radler 2.5%\r\nMy name is Hefe, but you can call me Radler.\r\nAllagash White 5.1%\r\nFamously refreshing witbier brewed in Maine.\r\nDC Brau Joint Resolution Hazy IPA 5.5%\r\nMadame Speaker, I will not yield the rest of my pint!\r\nRight Proper Raised by Wolves 5.0%\r\nAromatic, juicy, well-balanced Pale Ale.\r\nFirestone Walker Union Jack IPA 7.5%\r\nWest Coast IPA royalty - big, piny, solid.\r\nStone, Delicious IPA 7.7%\r\nIntensely, beautifully, lordly hopped deliciousness.\r\n9 1 Pint\r\n910.5L\r\n910.5L\r\n12 lo.5L\r\n1010.5L\r\n1010.5L\r\n11 10.5L\r\n810.4L\r\n910.5L\r\n9 | Pint\r\n9 | Pint\r\n9 | Pint\r\n9 | Pint\r\n9 1 Pint\r\n","ErrorMessage":"","ErrorDetails":""}],"OCRExitCode":1,"IsErroredOnProcessing":false,"ProcessingTimeInMilliseconds":"491","SearchablePDFURL":"Searchable PDF not generated as it was not requested."};
    this.dismissLoading();
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

  handleSelection(event) {
    this.rankBeers(event.detail.value);
  }

  private async rankBeers(beers: string[]) {
    let beerIds = [];
    let promises: Promise<any>[] = [];
    // for (const beer of beers) {
    //   promises.push(this.untappdService.getSearchResults(beer).toPromise());
    // }

    // Uncomment when api is available
    // const data = await forkJoin(promises).toPromise();
    // data.forEach((search) => {
    //   beerIds.push(search.response.beers.items[0].beer.bid);
    // });

    beerIds.push('12345');
    beerIds.push('6789');

    let beersWithRanks: BeerRank[] = [];
    // Uncomment when api is available
    // for (const beerId of beerIds) {
    //   const beerInfo = await this.untappdService.getBeerInfo(beerId).toPromise();
    //   if (beerInfo) {
    //     const beer = {
    //       name: beerInfo.response.beer.beer_name,
    //       rank: beerInfo.response.beer.rating_score
    //     }
    //     beersWithRanks.push(beer);
    //   }
    // }

    beersWithRanks.push({name: 'beer 1', rank: 4.333});
    beersWithRanks.push({name: 'beer 2', rank: 2.344});

    beersWithRanks.sort(function (a, b) {
      return b.rank - a.rank;
    });

    console.log(beersWithRanks);
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
    await this.loadingController.dismiss();
  }

}
