import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FriendInfor} from '../../models/FriendInfor';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private userService:UserService,private token:TokenStorageService) { }

  friends:FriendInfor[];
  ngOnInit(): void {
    this.getFriendList();
  }

  getFriendList(){
    const userId=this.token.getId();
    // @ts-ignore
    this.userService.getFriendLsist(userId).subscribe(resp=>{
      this.friends=resp;
      console.log(this.friends);
    })
  }

}
