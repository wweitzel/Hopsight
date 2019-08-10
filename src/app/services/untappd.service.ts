import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UntappdService {

  private url = environment.untappd_url;
  private clientId = environment.untappd_client_id;
  private clientSecret = environment.untappd_client_secret;

  constructor(private http: HttpClient) { }

  getBeerInfo(beerId: number): Observable<any> {
    const url = this.url + '/beer/info/' + beerId;
    let params = new HttpParams();
    params = params.append('client_id', this.clientId);
    params = params.append('client_secret', this.clientSecret);
    return this.http.get(url, { params });
  }

  getSearchResults(text: string) {
    const url = this.url + '/search/beer';
    let params = new HttpParams();
    params = params.append('client_id', this.clientId);
    params = params.append('client_secret', this.clientSecret);
    params = params.append('q', text);
    return this.http.get(url, { params });
  }
}
