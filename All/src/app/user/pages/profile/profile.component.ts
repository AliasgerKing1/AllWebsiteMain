import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  User: any;
  constructor(private _profile: ProfileService) {
    this._profile.getUserProfile().subscribe((result) => {
      this.User = result;
    });
  }

  ngOnInit(): void {}
}
