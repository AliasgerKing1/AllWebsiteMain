import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForgetPasswordService {
  constructor(private _http: HttpClient) {}
  checkUserName(obj: any) {
    return this._http.post<any>(
      'http://localhost:3000/api/forget/password',
      obj
    );
  }
  checkOtp(obj: any) {
    return this._http.post<any>(
      'http://localhost:3000/api/forget/password/check/otp',
      obj
    );
  }

  newPass(obj: any) {
    return this._http.post<any>(
      'http://localhost:3000/api/forget/password/new/password',
      obj
    );
  }
}
