import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private redirectUrl = 'http://localhost:3000/authenticate';

  constructor(private cookieService: CookieService,
              private router: Router,
              public menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(false);
    if (this.cookieService.get('access_token')) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    window.open(
      'https://untappd.com/oauth/authenticate/' +
      '?client_id=' + environment.untappd_client_id +
      '&response_type=code&' +
      'redirect_url=' + this.redirectUrl,
      '_self');
  }
}
