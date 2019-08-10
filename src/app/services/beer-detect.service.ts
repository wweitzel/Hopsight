import { Injectable } from '@angular/core';

const stateList = new Array("AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL",
  "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
  "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX",
  "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY");

@Injectable({
  providedIn: 'root'
})
export class BeerDetectService {

  constructor() { }

  getBeerSerchTerms(text: string): string[] {
    let strippedTextArray = [];
    let textAsArray = text.split(/\r?\n/);
    textAsArray.forEach((line) => {
      line = line.replace('...', ' ').trim();
      let lineArray = line.split(/[ ]+/);
      if (lineArray.length < 1) return;
      let strippedLine = '';
      lineArray.forEach((word) => {
        if (!word.includes('%') && !word.includes('$') && !stateList.includes(word.replace(/[()]/g, ''))) {
          strippedLine = strippedLine + word + ' ';
        }
      });
      strippedTextArray.push(strippedLine);
    });
    return strippedTextArray;
  }
}
