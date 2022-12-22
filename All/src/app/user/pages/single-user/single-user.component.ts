import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
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
  constructor(
    private _user: UserService,
    private actroute: ActivatedRoute,
    private _profile: ProfileService,
    private _fr: FriendRequestService
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
    this._fr.senderId().subscribe((result: any) => {});
  }

  ngOnInit(): void {}
}
