import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute} from '@angular/router';
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
  id:any;
  postTime:any;
  postDate = new Date();
url = "./assets/media/figure/chat_5.jpg";
  constructor(
    public _auth: AuthService,
    private _fb: FormBuilder,
    private _post: PostService,
    private _router: Router,
    private _profile: ProfileService,
    // private _actroute : ActivatedRoute
  ) {
    // this.id = this._actroute.snapshot.paramMap.get("id");
    this.statusForm = this._fb.group({
      // _id : null,
      statusinput: ['', Validators.required],
      time : this.postDate,
      // __v : null
    });

    // if(this.id) {
    //   this._post.getPostById(this.id).subscribe(result=> {
    //     console.log(result)
    //     this.statusForm.setValue(result);
    //   })
    // }

    this._profile.getUserProfile().subscribe((result: any) => {
      this.user = result;
    });
  }


  submit() {
    if (this.statusForm.invalid) {
      this.checkForm = true;
      return;
    }
    // if(this.id) {
    //   this._post.updatePost(this.id, this.statusForm.value).subscribe(result=> {
    //     this._router.navigate(['/home']);
    //   })
    // }else {
      this._post.addPost(this.statusForm.value).subscribe(result => {});
      window.location.reload();
    // }
  }

  ngOnInit(): void {}
}
