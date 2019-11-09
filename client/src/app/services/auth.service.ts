import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static ACCESS_TOKEN_KEY = 'access_token_hopsight';
  private static USERNAME_KEY = 'username';
  private redirectUrl = 'https://us-central1-hopsightbeer.cloudfunctions.net/app/authenticate';

  constructor(private router: Router,
    private iab: InAppBrowser,
    private platform: Platform,
    private storage: Storage,
    private toastController: ToastController,
    private db: AngularFirestore) { }

  isLoggedIn() {
    return this.storage.get(AuthService.ACCESS_TOKEN_KEY);
  }

  async login(token: string, username: string) {
    await this.storage.set(AuthService.USERNAME_KEY, username);
    await this.storage.set(AuthService.ACCESS_TOKEN_KEY, token);
  }

  async logout() {
    await this.storage.remove(AuthService.ACCESS_TOKEN_KEY);
    await this.storage.remove(AuthService.USERNAME_KEY);
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return this.storage.get(AuthService.ACCESS_TOKEN_KEY);
  }

  getUsername() {
    return this.storage.get(AuthService.USERNAME_KEY);
  }

  async loginWithUntappd() {
    const url = 'https://untappd.com/oauth/authenticate/' +
      '?client_id=' + environment.untappd_client_id +
      '&response_type=code&' +
      'redirect_url=' + this.redirectUrl;

    if (this.platform.is('cordova')) {
      const browser = this.iab.create(url, '_blank');
      browser.on('loadstart').subscribe(async event => {
        if ((event.url).indexOf('?access_token=') !== -1) {
          browser.close();
          let indexOfUsername = event.url.indexOf('&username=');
          let token = event.url.slice(event.url.indexOf('?access_token=') + '?access_token='.length, indexOfUsername);
          let username = event.url.slice(event.url.indexOf('&username=') + '&username='.length);
          await this.storeUser(username);
          await this.login(token, username);
          this.presentLoginToast(true);
          this.router.navigate(['/home']);
        }
      });
    } else {
      window.open(
        'https://untappd.com/oauth/authenticate/' +
        '?client_id=' + environment.untappd_client_id +
        '&response_type=code&' +
        'redirect_url=' + this.redirectUrl,
        '_self');
    }
  }

  async presentLoginToast(success: boolean) {
    const toast = await this.toastController.create({
      message: success ? 'Login successful.' : 'Login failed.',
      duration: 2000
    });
    toast.present();
  }

  async storeUser(username: string) {
    const dbUser = await this.db.collection('users', ref => ref.where('username', '==', username)).get().toPromise();
    if (dbUser.empty) {
      await this.db.collection('users').doc(username).set({
        username: username
      })
    }
    console.log(dbUser);
  }
}
