import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MenuController, ToastController, Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router,
              public menu: MenuController,
              public authService: AuthService,
              public route: ActivatedRoute,
              public toastController: ToastController,
              public platform: Platform) { }

  ngOnInit() {
    this.authService.isLoggedIn().then((resp) => {
      if (resp) {
        this.router.navigate(['/home']);
        return;
      }
    });
    if (!this.platform.is('cordova')) {
      const access_token = this.route.snapshot.queryParamMap.get("access_token")
      if (access_token) {
        this.authService.login(access_token).then(() => {
          this.router.navigate(['/home']);
          this.authService.presentLoginToast(true);
        })
      }
    }
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }

}
