import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcrSpaceService {

  constructor(private http: HttpClient) { }

  getParsedText(base64): Observable<any> {
    const url = 'https://api.ocr.space/parse/image';
    let headers = new HttpHeaders();
    headers = headers.append('apikey', 'apikey');
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
