import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss'],
})
export class PostBoxComponent implements OnInit {
  allPost: any = [];
  constructor(private _post: PostService) {
    this._post.getPost().subscribe((result) => {
      this.allPost = result;
    });
  }

  ConfDelete() {}
  ngOnInit(): void {}
}
