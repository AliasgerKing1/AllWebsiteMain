import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private _http : HttpClient) { }

  apiURL = "http://localhost:3000/api/like/"
  addLike(obj : any) { 
    return this._http.post<any>(this.apiURL, obj);
  }
}
