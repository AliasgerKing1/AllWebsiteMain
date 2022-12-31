import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  checkLength,
  checkNum,
  checkPass,
} from 'src/app/helpers/coustom_validations';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import { ContCodeService } from '../../services/cont-code.service';
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
  errMsg: any;
  allCode: any = [];
  joinedDate: any = new Date();
  userJoinedDate: any;
  strength: any = 0;
  passPer: any = 0;
  username: any;
  constructor(
    private _fb: FormBuilder,
    private _user: UserService,
    private _router: Router,
    private _auth: AuthService,
    private _code: ContCodeService
  ) {
    //Login Form
    this.LoginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this._code.getCountryCode().subscribe((result) => {
      this.allCode = result;
    });

    //Signup form
    this.UserForm = this._fb.group(
      {
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&-].{8,}'
            ),
          ],
        ],
        re_password: ['', Validators.required],
        contact: ['', Validators.required],
        gender: ['', Validators.required],
        day: ['', Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
        code: ['', Validators.required],
        terms: ['', Validators.required],
        joined_date: new Date(),
        senderId: '',
      },
      {
        validator: [checkPass(), checkNum(), checkLength()],
      }
    );
  }
  submit() {
    // this.userJoinedDate = parse(joinedDate.innerHTML);
    if (this.UserForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._user.AddUser(this.UserForm.value).subscribe((result) => {
      window.location.reload();
    });
  }

  Lsubmit() {
    if (this.LoginForm.invalid) {
      this.LCheckForm = true;
    }
    this._auth.doLogin(this.LoginForm.value).subscribe((result) => {
      if (result.success) {
        localStorage.setItem('token', result.token);
        this._router.navigate(['/home']);
      } else {
        if (result.errType == 1) {
          this.errMsg = 'This email/username is not registered !';
        }
        if (result.errType == 2) {
          this.errMsg = 'This password is incorrect !';
        }
      }
    });
  }

  day: any = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  month: any = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Augest',
    'September',
    'october',
    'November',
    'December',
  ];
  year: any = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988,
    1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976,
    1975, 1974, 1973, 1972, 1971, 1970,
  ];

  //Password Strength Bar

  ngOnInit(): void {}
  checkUserName() {
    this.username = this.UserForm.controls['email'].value;
    console.log(this.username);
  }
}
