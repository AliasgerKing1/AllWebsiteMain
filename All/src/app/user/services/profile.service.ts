import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private _http: HttpClient) {}
  getUserProfile() {
    return this._http.get<any>('http://localhost:3000/api/userprofile', {
      headers: this.generateHead(),
    });
  }

  changePassword(obj: any) {
    return this._http.post<any>(
      'http://localhost:3000/api/userprofile/update/password/',
      obj,
      {
        headers: this.generateHead(),
      }
    );
  }

  generateHead() {
    let token = localStorage.getItem('token');
    let head = new HttpHeaders().set('Authorization', JSON.stringify(token));
    return head;
  }
}
