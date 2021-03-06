import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Beer } from '../models/beer.model';
import { AuthService } from './auth.service';

export interface SearchResult {
  searchTerm: string,
  searchResult: Beer[]
}

@Injectable({
  providedIn: 'root'
})
export class UntappdService {

  private url = environment.untappd_url;
  private clientId = environment.untappd_client_id;
  private clientSecret = environment.untappd_client_secret;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  async getBeerInfo(beerId: number): Promise<Beer> {
    const url = this.url + '/beer/info/' + beerId;
    let params = new HttpParams();
    params = params.append('access_token', await this.authService.getAccessToken());
    return this.http.get<any>(url, { params }).pipe(map(beerInfo => {
      const beer: Beer = {
        beer_name: beerInfo.response.beer.beer_name,
        beer_abv: beerInfo.response.beer.beer_abv + '%',
        rating_score: beerInfo.response.beer.rating_score,
        rating_count: beerInfo.response.beer.rating_count,
        brewery: beerInfo.response.beer.brewery,
        beer_ibu: beerInfo.response.beer.beer_ibu,
        bid: beerInfo.response.beer.bid,
        beer_description: beerInfo.response.beer.beer_description,
        beer_style: beerInfo.response.beer.beer_style,
        beer_label: beerInfo.response.beer.beer_label
      };
      return beer;
    })).toPromise();
  }

  async getSearchResults(text: string): Promise<SearchResult> {
    const url = this.url + '/search/beer';
    let params = new HttpParams();
    params = params.append('access_token', await this.authService.getAccessToken());
    params = params.append('q', text);
    return this.http.get(url, { params }).pipe(map((search: any) => {
      let beers: Beer[] = [];
      search.response.beers.items.forEach((beerInfo) => {
        const beer: Beer = {
          bid: beerInfo.beer.bid,
          beer_name: beerInfo.beer.beer_name,
          beer_abv: beerInfo.beer.beer_abv + '%',
          rating_score: beerInfo.beer.rating_score,
          rating_count: beerInfo.beer.rating_count,
          brewery: beerInfo.beer.brewery,
          beer_description: beerInfo.beer.beer_description,
          beer_style: beerInfo.beer.beer_style,
          beer_ibu: beerInfo.beer.beer_ibu,
          beer_label: beerInfo.beer.beer_label
        };
        beers.push(beer);
      })
      return {searchTerm: text, searchResult: beers};
    })).toPromise();
  }
}
