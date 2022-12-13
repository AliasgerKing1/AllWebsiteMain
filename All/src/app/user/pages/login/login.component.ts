import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  UserForm: FormGroup;
  LoginForm: FormGroup;
  CheckForm = false;
  LCheckForm = false;
  errMsg : any;
  constructor(private _fb: FormBuilder, private _user: UserService, private _router : Router,private _auth : AuthService) {

    //Login Form
    this.LoginForm = this._fb.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required],
    })

    //Signup form
    this.UserForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      re_password: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
  submit() {
    if (this.UserForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._user.AddUser(this.UserForm.value).subscribe((result) => {
      this._router.navigate(["/home"]);
    });
  }

  Lsubmit() {
        if(this.LoginForm.invalid) {
        this.LCheckForm = true;
        }
        this._auth.doLogin(this.LoginForm.value).subscribe(result=> {
          console.log(result);
          if(result.success) {
            localStorage.setItem('token', result.token);
            this._router.navigate(['/home']);
          }else {
            if(result.errType == 1) {
                this.errMsg = "This email/username is not registered !"
            }
            if(result.errType == 2) {
                this.errMsg = "This password is incorrect !"
            }
          }
        })
        }
  ngOnInit(): void {}
}
