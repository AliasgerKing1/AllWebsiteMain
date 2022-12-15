import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  statusForm: FormGroup;
  checkForm = false;
  user: any;
  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _post: PostService,
    private _router: Router,
    private _profile: ProfileService
  ) {
    this.statusForm = this._fb.group({
      statusinput: ['', Validators.required],
    });
    this._profile.getUserProfile().subscribe((result: any) => {
      this.user = result;
    });
  }

  submit() {
    if (this.statusForm.invalid) {
      this.checkForm = true;
      return;
    }
    this._post.addPost(this.statusForm.value).subscribe((result) => {});
  }

  ngOnInit(): void {}
}
