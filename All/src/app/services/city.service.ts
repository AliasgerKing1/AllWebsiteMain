import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/api/city/';
  getCity() {
    return this._http.get<any>(this.apiURL);
  }

  getTotalCity() {
    return this._http.get<any>(this.apiURL + 'totalCity');
  }

  getRecord(rec: any, skip: any) {
    return this._http.get<any>(this.apiURL + 'pagination/' + rec + '/' + skip);
  }
}
