import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000/api/upload/';
  addImage(obj: any) {
    return this._http.post<any>(this.apiUrl, obj);
  }
  getImage() {
    return this._http.get<any>(this.apiUrl);
  }
}
