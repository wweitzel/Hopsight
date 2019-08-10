import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcrSpaceService {

  private url = environment.ocr_space_url;
  private apiKey = environment.ocr_space_api_key;

  constructor(private http: HttpClient) { }

  getParsedText(base64): Observable<any> {
    const url = this.url + '/parse/image';
    let headers = new HttpHeaders();
    headers = headers.append('apikey', this.apiKey);
    let body = new FormData();
    body.append('language', 'eng');
    body.append('isOverlayRequired', 'false');
    body.append('base64Image', base64);
    body.append('iscreatesearchablepdf', 'false');
    body.append('issearchablepdfhidetextlayer', 'false');
    return this.http.post(url, body, {
      headers: headers
    })
  }

}
