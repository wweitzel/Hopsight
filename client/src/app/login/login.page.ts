import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private redirectUrl = 'https://us-central1-hopsightbeer.cloudfunctions.net/app/authenticate';

  constructor(private router: Router,
              public menu: MenuController,
              private authService: AuthService) { }

  ngOnInit() {
    this.menu.enable(false);
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

}
