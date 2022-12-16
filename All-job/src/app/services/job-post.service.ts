import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobPostService {

  constructor(private _http : HttpClient) { }

  apiURL= "http://localhost:3000/api/recruiter/job/post/"
  addJob(obj : any) {
    return this._http.post<any>(this.apiURL, obj);
  }
  getJob() {
    return this._http.get<any>(this.apiURL);
  }
}
