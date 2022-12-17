import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  statusForm: FormGroup;
  checkForm = false;
  user: any;
  id:any;
  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _post: PostService,
    private _router: Router,
    private _profile: ProfileService,
    private _actroute : ActivatedRoute
  ) {
    this.id = this._actroute.snapshot.paramMap.get("id");
    this.statusForm = this._fb.group({
      _id : null,
      statusinput: ['', Validators.required],
      __v : null
    });
    this._profile.getUserProfile().subscribe((result: any) => {
      this.user = result;
    });

    if(this.id) {
      this._post.getPostById(this.id).subscribe(result=> {
        this.statusForm.setValue(result);
      })
    }
  }

  submit() {
    if (this.statusForm.invalid) {
      this.checkForm = true;
      return;
    }
    this._post.addPost(this.statusForm.value).subscribe((result) => {});
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
