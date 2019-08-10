import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UntappdService {

  constructor(private http: HttpClient) { }

  getBeerInfo(beerId: number): Observable<any> {
    const url = 'https://api.untappd.com/v4/beer/info/' + beerId;
    let params = new HttpParams();
    params = params.append('client_id', 'client_id');
    params = params.append('client_secret', '64D3BDA4489097388BEB62C9815054316F0EF4CC');
    return this.http.get(url, { params });
  }

  getSearchResults(text: string) {
    const url = 'https://api.untappd.com/v4/search/beer'
    let params = new HttpParams();
    params = params.append('client_id', 'client_id');
    params = params.append('client_secret', '64D3BDA4489097388BEB62C9815054316F0EF4CC');
    params = params.append('q', text);
    return this.http.get(url, { params });
  }
}
