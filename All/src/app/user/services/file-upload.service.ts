import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor(private _http: HttpClient) {}
  apiURL = "http://localhost:3000/api/profile/image/"
  addImage(obj : any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  getImage() {
    return this._http.get<any>(this.apiURL);
  }
}
