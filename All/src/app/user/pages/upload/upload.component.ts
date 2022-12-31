import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  imageForm: FormGroup;
  checkForm: boolean = false;
  allImages: any = [];
  constructor(private _fb: FormBuilder, private _upload: UploadService) {
    this.imageForm = this._fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
    });
    this._upload.getImage().subscribe((result) => {
      this.allImages = result;
    });
  }

  ngOnInit(): void {}
  submit(photo: any) {
    let image = photo.files[0];
    if (this.imageForm.invalid) {
      this.checkForm = true;
    }
    let imgForm = new FormData();
    if (image) {
      if (
        image.type == 'image/jpeg' ||
        image.type == 'image/jpg' ||
        image.type == 'image/png' ||
        image.type == 'image/svg' ||
        image.type == 'image/svg+xml'
      ) {
        if (image.size < 1024 * 1024 * 4) {
          if (!this.imageForm.invalid) {
            imgForm.append('data', JSON.stringify(this.imageForm.value));
            imgForm.append('image', image);
            this._upload.addImage(imgForm).subscribe((result) => {
              this.allImages.push(result);
            });
          }
        } else {
          this.imageForm.controls['image'].setErrors({ sizeErr: true });
        }
      } else {
        this.imageForm.controls['image'].setErrors({ typeErr: true });
      }
    }
  }
}
