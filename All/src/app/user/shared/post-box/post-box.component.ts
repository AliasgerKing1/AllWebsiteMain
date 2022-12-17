import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
})
export class PostBoxComponent implements OnInit {
  allPost: any = [];
  type:String = 'Posts';
  post:any;
  constructor(private _post: PostService, private _router : Router) {
    this._post.getPost().subscribe((result) => {
      this.allPost = result;
    });
  }
askDelete(obj : any) {
    this.post = obj;
}
  confDelete(btn : any) {
    this._post.deletePost(this.post._id).subscribe(result=> {
        if(result.sucess == true) {
      btn.click();
        }
    })
  }
  reload() {
    window.location.reload();
  }

  edit(obj : any) {
      this._router.navigate(['/home/edit/' + obj._id]);
  }
  ngOnInit(): void {}
}
