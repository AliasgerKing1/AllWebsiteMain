import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  UserForm: FormGroup;
  CheckForm = false;
  constructor(private _fb: FormBuilder, private _user: UserService) {
    this.UserForm = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      birthdate: ['', Validators.required],
    });
  }
  submit() {
    if (this.UserForm.invalid) {
      this.CheckForm = true;
      return;
    }
    this._user.AddUser(this.UserForm.value).subscribe((result) => {
      console.log(result);
    });
  }
  ngOnInit(): void {}
}
