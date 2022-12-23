import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import { FriendRequestService } from '../../services/friend-request.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss'],
})
export class SingleUserComponent implements OnInit {
  id: any;
  user: any;
  User: any = [];
  request: Number = 0;
  constructor(
    private _user: UserService,
    private actroute: ActivatedRoute,
    private _profile: ProfileService,
    private _fr: FriendRequestService,
    public _auth: AuthService
  ) {
    this.id = this.actroute.snapshot.paramMap.get('id');
    this._user.GetUserById(this.id).subscribe((result) => {
      // whos page get visit data / reciver
      this.User = result;

      this._profile.getUserProfile().subscribe((result: any) => {
        // who is online / sender
        this.user = result;
      });
    });
  }
  friend_request() {
    this._fr.getRequest(this.User).subscribe((result) => {
      console.log(result);
    });
    this._fr.bothId(this.User).subscribe((result) => {
      if (result.success == true) {
        this.request = 1;
      }
    });
  }

  unfollow() {
    this._fr.deleteRequest(this.User._id).subscribe((result) => {
      if (result.successdelete == true) {
        this.request = 0;
      }
    });
  }
  ngOnInit(): void {}
}
