import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuard implements CanActivate {
  constructor(private _router : Router, private _auth : AuthService) {

  }
  canActivate() {
    if(this._auth.isLoggedIn()) {
      this._router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }
  
  
}
