import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/api/user/';
  GetUser() {
    return this._http.get<any>(this.apiURL);
  }
  AddUser(obj: any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  DeleteUser(id: any) {
    return this._http.delete<any>(this.apiURL + id);
  }
  GetUserById(id: any) {
    return this._http.get<any>(this.apiURL + id);
  }
  UpdateUser(id: any, obj: any) {
    return this._http.put<any>(this.apiURL + id, obj);
  }
}
