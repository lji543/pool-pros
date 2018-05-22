import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Dealer } from './dealer';
// import { DEALERS } from './dealers';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  console.log('configService');
  // console.log('config.service dealers', this.DEALERS)

  // configUrl = 'assets/config.json';
  // console.log('config.service ', configUrl)

  // getConfig() {
  //   return this.http.get(this.configUrl);
  // }
  // constructor(private http: HttpClient) { }
  constructor() { }

  getDealers(): Dealer[] {
    return DEALERS;
  }
}
