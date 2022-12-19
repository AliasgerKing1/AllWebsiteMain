import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BuiltinTypeName } from '@angular/compiler';
import { FileUploadService } from '../../services/file-upload.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  url: any = './assets/media/banner/user_1.jpg';
  uploadForm: FormGroup;
  constructor(
    private _profile: ProfileService,
    private _fb: FormBuilder,
    private _file: FileUploadService
  ) {
    this._profile.getUserProfile().subscribe((result: any) => {
      this.user = result;
    });

    this.uploadForm = this._fb.group({
      image: '',
    });
  }
  onSelectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  ngOnInit(): void {}
}
