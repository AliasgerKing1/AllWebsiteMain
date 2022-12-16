import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  apiURL = 'http://localhost:3000/api/post/';
  addPost(obj: any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  getPost() {
    return this._http.get<any>(this.apiURL);
  }
  getPostById(id: any) {
    return this._http.get<any>(this.apiURL + id);
  }
  deletePost(id: any) {
    return this._http.delete<any>(this.apiURL + id);
  }
  updatePost(id: any, obj: any) {
    return this._http.put<any>(this.apiURL + id, obj);
  }
}
