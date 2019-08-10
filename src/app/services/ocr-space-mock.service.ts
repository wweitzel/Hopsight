import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcrSpaceMockService {

  constructor() { }

  getParsedText(base64): Observable<any> {
      return of({"ParsedResults":[{"TextOverlay":{"Lines":[],"HasOverlay":false,"Message":"Text overlay is not provided as it is not requested"},"TextOrientation":"0","FileParseExitCode":1,"ParsedText":"Dachnik True Helles Lager 4.4%\r\nExclusively for Dacha by DC Brau.\r\nWeihenstephaner Pilsner 5.1%\r\nStronger, more flavorful and true to the style.\r\nWeihenstephaner Hefeweizcn 5.4%\r\nHefe which all other hefes are compared to!\r\nWeihenstephaner Vitus 7.7%\r\nThe King of wheat beers. The Game Changer.\r\nWeihenstephaner Kristallweizen 5.4%\r\nRare, filtered and less filling hefe.\r\nWeihenstephaner Dunkelweizen 5.3%\r\nDarker, maltier version of our top notch hefe.\r\nWeihenstephaner Korbinian 7.4%\r\nA legendary doppelbock! Dark and very drinkable.\r\nSion Kölsch 4.8%\r\nAuthentic, crisp pale ale brewed only in Köln.\r\nSchofferhofer Grapefruit Radler 2.5%\r\nMy name is Hefe, but you can call me Radler.\r\nAllagash White 5.1%\r\nFamously refreshing witbier brewed in Maine.\r\nDC Brau Joint Resolution Hazy IPA 5.5%\r\nMadame Speaker, I will not yield the rest of my pint!\r\nRight Proper Raised by Wolves 5.0%\r\nAromatic, juicy, well-balanced Pale Ale.\r\nFirestone Walker Union Jack IPA 7.5%\r\nWest Coast IPA royalty - big, piny, solid.\r\nStone, Delicious IPA 7.7%\r\nIntensely, beautifully, lordly hopped deliciousness.\r\n9 1 Pint\r\n910.5L\r\n910.5L\r\n12 lo.5L\r\n1010.5L\r\n1010.5L\r\n11 10.5L\r\n810.4L\r\n910.5L\r\n9 | Pint\r\n9 | Pint\r\n9 | Pint\r\n9 | Pint\r\n9 1 Pint\r\n","ErrorMessage":"","ErrorDetails":""}],"OCRExitCode":1,"IsErroredOnProcessing":false,"ProcessingTimeInMilliseconds":"491","SearchablePDFURL":"Searchable PDF not generated as it was not requested."})}
  }