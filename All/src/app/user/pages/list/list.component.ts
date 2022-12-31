import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  allImages: any = [];
  constructor(private _upload: UploadService) {
    this._upload.getImage().subscribe((result) => {
      this.allImages = result;
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
