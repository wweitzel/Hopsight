import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static ACCESS_TOKEN_KEY = 'access_token_hopsight';
  private redirectUrl = 'https://us-central1-hopsightbeer.cloudfunctions.net/app/authenticate';

  constructor(private router: Router,
    private iab: InAppBrowser,
    private platform: Platform,
    private storage: Storage,
    private toastController: ToastController) { }

  isLoggedIn() {
    return this.storage.get(AuthService.ACCESS_TOKEN_KEY);
  }

  login(token: string) {
    return this.storage.set(AuthService.ACCESS_TOKEN_KEY, token);
  }

  async logout() {
    await this.storage.remove(AuthService.ACCESS_TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return this.storage.get(AuthService.ACCESS_TOKEN_KEY);
  }

  async loginWithUntappd() {
    await this.login('E49827D2B8E444B9F9D81493650308E8053436DE');
    this.presentLoginToast(true);
    this.router.navigate(['/home']);

    // const url = 'https://untappd.com/oauth/authenticate/' +
    //   '?client_id=' + environment.untappd_client_id +
    //   '&response_type=code&' +
    //   'redirect_url=' + this.redirectUrl;

    // if (this.platform.is('cordova')) {
    //   const browser = this.iab.create(url, '_blank');
    //   browser.on('loadstart').subscribe(async event => {
    //     if ((event.url).indexOf('?access_token=') !== -1) {
    //       browser.close();
    //       let token = event.url.slice(event.url.indexOf('?access_token=') + '?access_token='.length);
    //       // here is your token, now you can close the InAppBrowser
    //       await this.login(token);
    //       this.presentLoginToast(true);
    //       this.router.navigate(['/home']);
    //     }
    //   });
    // } else {
    //   window.open(
    //     'https://untappd.com/oauth/authenticate/' +
    //     '?client_id=' + environment.untappd_client_id +
    //     '&response_type=code&' +
    //     'redirect_url=' + this.redirectUrl,
    //     '_self');
    // }
  }

  async presentLoginToast(success: boolean) {
    const toast = await this.toastController.create({
      message: success ? 'Login successful.' : 'Login failed.',
      duration: 2000
    });
    toast.present();
  }
}
