import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {FriendInfor} from '../../models/FriendInfor';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  userId;
  amountOfFriends = 0;
  amountOfRequest = 0;
  friends: FriendInfor[];
  friendRequestList: FriendInfor[];

  constructor(private userService: UserService,
              private token: TokenStorageService,
              private router: Router,
              private toastService: ToastrService) {
  }

  ngOnInit(): void {
    this.userId = this.token.getId();
    this.getFriendList();
    this.getFriendRequestList();
  }

  getFriendList() {
    // @ts-ignore
    this.userService.getFriendLsist(this.userId).subscribe(resp => {
      this.friends = resp;
      this.amountOfFriends = this.friends.length;
    });
  }

  getFriendRequestList() {
    // @ts-ignore
    this.userService.getFriendRequestList(this.userId).subscribe(resp => {
      this.friendRequestList = resp;
      this.amountOfRequest = this.friendRequestList.length;
    });
  }


  confirm(id) {
    // @ts-ignore
    this.userService.confirm(this.userId, id).subscribe(resp => {
      this.getFriendRequestList();
      this.getFriendList();
      this.router.navigate(['home/friends']);
      this.toastService.success('Accepted ');
    });
  }

  unfriend(receiverId) {

    const senderId = +this.token.getId();
    this.userService.unfriend(receiverId, senderId).subscribe(resp => {
      this.ngOnInit();
      this.router.navigate(['home/friends']);
      this.toastService.success('You unfriend a person');
    });
  }


}
