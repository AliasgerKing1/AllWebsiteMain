import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../services/file-upload.service';
import { AuthService } from '../../services/auth.service';
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
    public _auth: AuthService
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
    form.append('data', JSON.stringify(this.uploadForm.value));
    form.append('image', image);

    this._file.addImage(form).subscribe((result) => {
      window.location.reload();
    });
  }
  selected(btn: any) {
    btn.click();
  }

  ngOnInit(): void {}
}
