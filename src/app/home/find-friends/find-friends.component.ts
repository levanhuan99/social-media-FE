import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Account} from '../../models/Account';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.component.html',
  styleUrls: ['./find-friends.component.css']
})
export class FindFriendsComponent implements OnInit {

  searchKeyword: string;


  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,private token:TokenStorageService) {
  }

  friendList: Account[];

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
    this.userService.searchFriends(this.searchKeyword,this.token.getId()).subscribe((resp: Account[]) => {
      this.friendList = resp;
    });
  }

  addFriend(reciverId){
    const  senderId= +this.token.getId();
    this.userService.sendFriendRequest(reciverId,senderId).subscribe(resp=>{
    })
  }
}
