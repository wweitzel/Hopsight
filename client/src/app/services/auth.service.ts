import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static ACCESS_TOKEN_KEY = 'access_token_hopsight';
  private redirectUrl = 'https://us-central1-hopsightbeer.cloudfunctions.net/app/authenticate';

  constructor(private router: Router) { }

  isLoggedIn() {
    return localStorage.getItem(AuthService.ACCESS_TOKEN_KEY);
  }

  login(token: string) {
    localStorage.setItem(AuthService.ACCESS_TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(AuthService.ACCESS_TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getAccessToken() {
    return localStorage.getItem(AuthService.ACCESS_TOKEN_KEY);
  }

  loginWithUntappd() {
    window.open(
      'https://untappd.com/oauth/authenticate/' +
      '?client_id=' + environment.untappd_client_id +
      '&response_type=code&' +
      'redirect_url=' + this.redirectUrl,
      '_self');
  }
}
