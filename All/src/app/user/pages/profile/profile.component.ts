import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;
  uploadForm: FormGroup;
  profile: any = [];
  constructor(
    private _profile: ProfileService,
    private _fb: FormBuilder,
    private _file: FileUploadService,
    public _auth: AuthService,
    private _router: Router
  ) {
    this._profile.getUserProfile().subscribe((result: any) => {
      this.user = result;
    });

    this._file.getImage().subscribe((result) => {
      this.profile = result;
    });

    this.uploadForm = this._fb.group({
      userToken: '',
    });
  }
  onSelectFile(photo: any) {
    let image = photo.files[0];
    let form = new FormData();
    if (
      image.type == 'image/jpeg' ||
      image.type == 'image/jpg' ||
      image.type == 'image/png' ||
      image.type == 'image/svg'
    ) {
      form.append('data', JSON.stringify(this.uploadForm.value));
      form.append('image', image);

      this._file.addImage(form).subscribe((result) => {
        this.profile.push(result.name);
      });
    } else {
      this.uploadForm.controls['image'].setErrors({ yypeErr: true });
    }
  }
  selected(btn: any) {
    btn.click();
  }

  changePass() {
    this._router.navigate(['/change/password']);
  }

  ngOnInit(): void {}
}
