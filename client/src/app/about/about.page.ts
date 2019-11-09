import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {

  isLoggedIn: boolean;
  username: Promise<string>;

  constructor(public authService: AuthService,
              public menu: MenuController) { }

  ionViewWillEnter(){
    this.menu.enable(true);
    this.authService.isLoggedIn().then((resp) => {
      if (resp) {
        this.username = this.authService.getUsername();
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
  }

}
