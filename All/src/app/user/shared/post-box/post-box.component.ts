import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
})
export class PostBoxComponent implements OnInit {
  likeForm : FormGroup;
  allPost: any = [];
  type: String = 'Posts';
  post: any;
  liked:any;
  value:String = '';
  like:any= 0;
   @Output() likeSend = new EventEmitter();
  @Output() likedPostIdSend = new EventEmitter();
  likedPost: any = [];

  constructor(private _post: PostService, private _router: Router, private _fb : FormBuilder, private _like : LikeService) {
    this.likeForm = this._fb.group({
      reacted : this.value
    })
    this._post.getPost().subscribe((result) => {
      this.allPost = result;
    });
  }
  askDelete(obj: any) {
    this.post = obj;
  }
  confDelete(btn: any) {
    this._post.deletePost(this.post).subscribe((result) => {
      if (result.sucess == true) {
        btn.click();
      }
    });
  }
  reload() {
    window.location.reload();
  }

  edit(obj: any) {
    this._router.navigate(['/home/edit/' + obj]);
  }

  calculateDiff(dataDate: any) {}

  HourTime(key: any) {
    let start = new Date().getTime();
    let end = new Date(key.time).getTime();

    let time = start - end;

    let diffDay = Math.floor(time % 1);
    let diffHour = Math.floor((time % 86400000) / 3600000);
    let diffMinute = Math.floor(((time % 86400000) % 3600000) / 60000);
    let diffSec = Math.floor((((time % 86400000) % 3600000) % 60000) / 3000);

    if (diffDay >= 1) {
      key = 'days ago';
      return diffDay + key;
    } else if (diffHour >= 1) {
      key = 'hours ago';
      return diffHour + key;
    } else if (diffMinute >= 1) {
      key = 'min ago';
      return diffMinute + key;
    } else {
      key = 'sec ago';
      return diffSec + key;
    }
  
  }

  reacted(obj : any) {
    this.likedPostIdSend.emit(this.likedPost);
  }

  value1(obj : any) {
    this.likedPost = obj;
    this.value = 'thumbsup'
        // this.likeSend.emit(this.value);
  }
  value2(obj : any) {
    this.value = 'laugh';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);
  }
  value3(obj : any) {
    this.value = 'loving';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);
  }
  value4(obj : any) {
    this.value = 'heart';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);

  }
  value5(obj : any) {
    this.value = 'shocked';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);
  }
  value6(obj : any) {
    this.value = 'crying';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);
  }
  value7(obj : any) {
    this.value = 'angry';
    this.likedPost = obj;
        // this.likeSend.emit(this.value);
  }

  likeSubmited() {
this._like.addLike(this.likeForm.value).subscribe(result=> {
  this._router.navigate(["/home"]);
})
  }

  ngOnInit(): void {}
}
