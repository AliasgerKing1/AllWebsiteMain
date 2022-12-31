import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkPass } from 'src/app/helpers/coustom_validation_changepass';
import { ForgetPasswordService } from '../../services/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  passForm: FormGroup;
  otpForm: FormGroup;
  checkForm: boolean = false;
  checkForm2: boolean = false;
  username: any;
  otpPass: any;
  errMsg: string = '';
  otpErrMsg: string = '';
  checkOtp: boolean = false;
  otpContainer: any;
  newPassForm: FormGroup;
  newPasscheckForm: boolean = false;
  checkNewPass: boolean = false;
  newPass: any;
  constructor(
    private _fb: FormBuilder,
    private _fpass: ForgetPasswordService,
    private _router: Router
  ) {
    this.passForm = this._fb.group({
      username: ['', [Validators.required, Validators.email]],
    });
    this.otpForm = this._fb.group({
      otp: ['', Validators.required],
    });
    this.newPassForm = this._fb.group(
      {
        new_pass: ['', Validators.required],
        conf_new_pass: ['', Validators.required],
      },
      {
        validator: [checkPass()],
      }
    );
  }

  ngOnInit(): void {}
  check() {
    if (this.passForm.invalid) {
      this.checkForm = true;
      return;
    }
    this.username = this.passForm.controls['username'].value;
    let obj = { username: this.username };
    this._fpass.checkUserName(obj).subscribe((result) => {
      if (result.success == false) {
        this.errMsg = 'This username/email is does not exists !';
      } else {
        this.checkOtp = true;
      }
    });
  }
  otp() {
    if (this.otpForm.invalid) {
      this.checkForm2 = true;
      return;
    }
    this.otpPass = this.otpForm.controls['otp'].value;
    let obj = { otp: this.otpPass, username: this.username };
    this._fpass.checkOtp(obj).subscribe((result) => {
      if (result.success == false) {
        this.otpErrMsg = 'This otp is incorrect !';
      } else {
        this.checkNewPass = true;
      }
    });
  }

  submit() {
    if (this.newPassForm.invalid) {
      this.newPasscheckForm = true;
      return;
    }
    this.newPass = this.newPassForm.controls['new_pass'].value;
    let obj = { newPass: this.newPass, username: this.username };
    this._fpass.newPass(obj).subscribe((result) => {
      if (result.success == true) {
        this._router.navigate(['/']);
      }
    });
  }
}
