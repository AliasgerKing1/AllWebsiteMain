import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
})
export class PostBoxComponent implements OnInit {
  allPost: any = [];
  type: String = 'Posts';
  post: any;
  like: any = 0;
  value: any;
  imgLoop: Number[] = [1, 2, 4, 5, 7, 6, 3];
  @Output() likeSend = new EventEmitter();
  @Output() likedPostIdSend = new EventEmitter();
  likedPost: any = [];

  constructor(private _post: PostService, private _router: Router) {
    this._post.getPost().subscribe((result) => {
      this.allPost = result;
    });
  }
  askDelete(obj: any) {
    this.post = obj;
  }
  confDelete(btn: any) {
    this._post.deletePost(this.post._id).subscribe((result) => {
      if (result.sucess == true) {
        btn.click();
      }
    });
  }
  reload() {
    window.location.reload();
  }

  edit(obj: any) {
    this._router.navigate(['/home/edit/' + obj._id]);
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

  reacted(obj: any) {
    this.likedPost = obj;
    this.like++;
    if (this.like > 1) {
      return;
    }
    console.log(this.like);
  }

  likeSending() {
    this.likeSend.emit(this.like);
    this.likedPostIdSend.emit(this.likedPost._id);
  }

  ngOnInit(): void {}
}
