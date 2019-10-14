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
        if (!word.includes('%') && !word.includes('$') && (!word.includes('(') && !word.includes(')'))) {
          strippedLine = strippedLine + word + ' ';
        }
      });
      strippedLine = strippedLine.trim();
      const strippedLineArray = strippedLine.split(/[ ]+/);
      if (this.isNumber(strippedLineArray[strippedLineArray.length - 1])) {
        strippedLineArray.pop();
      }
      if (strippedLineArray.length > 1 && strippedLineArray.length < 12 && this.hasStringWithLength(3, strippedLineArray)) {
        strippedTextArray.push(strippedLineArray.join(' '));
      }
    });
    return strippedTextArray;
  }

  private hasStringWithLength(length: number, array: string[]): boolean {
    for (let str of array) {
      if (str.length > length) {
        return true;
      }
    }
    return false;
  }

  private isNumber(value: string | number): boolean {
    return ((value != null) && !isNaN(Number(value.toString())));
  }
}
