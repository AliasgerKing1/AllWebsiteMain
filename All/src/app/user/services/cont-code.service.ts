import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContCodeService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/api/code/';
  getCountryCode() {
    return this._http.get<any>(this.apiURL);
  }
}
