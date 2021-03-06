import { Component, ChangeDetectorRef } from '@angular/core';

import { LoadingController, MenuController, ToastController, AlertController } from '@ionic/angular';

import imageCompression from 'lib/browser-image-compression/browser-image-compression';
import { UntappdService, SearchResult } from '../services/untappd.service';
import { UntappdMockService } from '../services/untappd-mock.service';
import { OcrSpaceService } from '../services/ocr-space.service';
import { OcrSpaceMockService } from '../services/ocr-space-mock.service';

import { forkJoin } from 'rxjs';
import { BeerDetectService } from '../services/beer-detect.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Menu } from '../menus/menus.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  imageText = '';
  errorMessage = '';
  autoRank = true;
  doneParsing = false;
  doneRanking = false;
  showGetStarted = true;
  strippedTextArray = [];
  username: Promise<string>;
  selectedBeers: string[] = [];
  beersWithRanks: any[] = [];

  constructor(public loadingController: LoadingController,
    public untappdService: UntappdService,
    public ocrSpaceService: OcrSpaceService,
    public router: Router,
    public beerDetectService: BeerDetectService,
    public menu: MenuController,
    public toastController: ToastController,
    public route: ActivatedRoute,
    public authService: AuthService,
    public changeDetector: ChangeDetectorRef,
    public db: AngularFirestore,
    public alertController: AlertController) { }

  ionViewWillEnter() {
    this.menu.enable(true);
    this.username = this.authService.getUsername();
  }

  async imageSelected(event) {
    await this.presentLoading('Parsing image...');
    this.doneParsing = false;
    this.doneRanking = false;
    this.beersWithRanks = [];
    this.errorMessage = '';
    await this.handleImage(event).finally(async () => {
      await this.dismissLoading();
      this.doneParsing = true;
      this.changeDetector.detectChanges();
    });

    if (this.autoRank) {
      await this.beersSelected({ detail: { value: this.strippedTextArray } });
    }
  }

  async beersSelected(event) {
    await this.presentLoading('Ranking beers...');

    try {
      await this.rankBeers(event.detail.value).finally(async () => {
        await this.dismissLoading();
        this.showGetStarted = false;
        this.changeDetector.detectChanges();
      });
    } catch (e) {
      console.log(e);
      if (e.error.meta.code === 429) {
        this.errorMessage = 'Too many requests. Try again in one hour.'
      }
    }

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
        beer: row.beer_untappd
      }
    };
    this.router.navigate(['beer-details'], navigationExtras);
  }

  async saveMenu(menuName: string) {
  if (!menuName.trim()) {
      this.errorMessage = 'Name cannot be blank';
      return;
    }

    let menu: Menu = {
      user: await this.authService.getUsername(),
      beers: this.beersWithRanks,
      name: menuName
    }
    await this.presentLoading('Saving menu...')
    const dbMenu = await this.db.collection<Menu>('user_menu', ref => ref.where('name', '==', menuName)).get().toPromise();
    if (!dbMenu.empty) {
      this.errorMessage = 'Name already exists. Type a different name';
      await this.dismissLoading();
      return;
    }
    
    this.db.collection<Menu>('user_menu').add(menu)
      .then(() => {
        this.errorMessage = 'Save menu successful'
      })
      .catch(() => {
        this.errorMessage = 'Error saving menu'
      })
      .finally(async () => {
        await this.dismissLoading()
      });
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Enter name for menu',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Menu Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Save',
          handler: (data) => {
            this.saveMenu(data.name);
          }
        }
      ]
    });

    await alert.present();
  }

  private async rankBeers(beers: string[]) {
    let promises: Promise<SearchResult>[] = [];

    // Pepare individual search requests for each beer name
    for (const beer of beers) {
      promises.push(this.untappdService.getSearchResults(beer));
    }

    // Get an array of each search result
    const data = await forkJoin(promises).toPromise();

    // Take the first beer from each search result store it as a beer to be used for ranking
    let beersToRank: any[] = [];
    for (let search of data) {
      if (search.searchResult.length > 0) {
        beersToRank.push({ search_term: search.searchTerm, beer_untappd: search.searchResult[0] });
      } else {
        const stripped = this.stripAfterDash(search.searchTerm);
        if (stripped) {
          const result = await this.untappdService.getSearchResults(stripped);
          if (result.searchResult.length > 0) {
            beersToRank.push({ search_term: result.searchTerm, beer_untappd: result.searchResult[0] });
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
      const beerInfo = await this.untappdService.getBeerInfo(beer.beer_untappd.bid);
      if (beerInfo) {
        beersWithRanks.push({ search_term: beer.search_term, beer_untappd: beerInfo });
      }
    }

    beersWithRanks.sort(function (a, b) {
      return b.beer_untappd.rating_score - a.beer_untappd.rating_score;
    });

    this.beersWithRanks = beersWithRanks;
    this.doneRanking = true;
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
