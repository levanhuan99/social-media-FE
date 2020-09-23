import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {FriendInfor} from '../../models/FriendInfor';

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {

  searchKeyword: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private token: TokenStorageService,
              private router:Router) {
  }

  friendList: FriendInfor[];

  ngOnInit(): void {

    this.getSearchWord();
  }


  getSearchWord() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchKeyword = params['q'];
      this.getListFriends();
    });
  }


  getListFriends() {
    this.userService.searchFriends(this.searchKeyword, this.token.getId()).subscribe((resp: FriendInfor[]) => {
      this.friendList = resp;
      console.log(this.friendList);
    });
  }


  addFriend(reciverId) {
    const senderId = +this.token.getId();
    this.userService.sendFriendRequest(reciverId, senderId).subscribe(resp => {
    });
    this.getSearchWord();
  }

  unfriend(receiverId) {
    const senderId = +this.token.getId();
    this.userService.unfriend(receiverId, senderId).subscribe(resp => {
    });
    this.getSearchWord();
  }
}
