import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  StatusForm: FormGroup;
  CheckForm = false;
  constructor(public _auth: AuthService, private _fb: FormBuilder) {
    this.StatusForm = this._fb.group({
      statusinput: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
}
