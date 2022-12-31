import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { checkPass } from 'src/app/helpers/coustom_validation_changepass';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  passForm: FormGroup;
  checkForm: boolean = false;
  errMsg: string = '';
  constructor(
    private _fb: FormBuilder,
    private _profile: ProfileService,
    private _auth: AuthService
  ) {
    this.passForm = this._fb.group(
      {
        old_pass: ['', Validators.required],
        new_pass: ['', Validators.required],
        conf_new_pass: ['', Validators.required],
      },
      {
        validator: [checkPass()],
      }
    );
  }

  ngOnInit(): void {}

  submit() {
    if (this.passForm.invalid) {
      this.checkForm = true;
      return;
    }
    this._profile.changePassword(this.passForm.value).subscribe((result) => {
      if (result.success == true) {
        this._auth.logout();
      } else {
        this.errMsg = 'Current Password is incorrect !';
      }
    });
  }
}
