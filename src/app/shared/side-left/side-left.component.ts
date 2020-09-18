import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.css']
})
export class SideLeftComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    console.log('this is navigate');
    this.route.navigate(['login']);
  }

  goNewfeed(){
    this.route.navigate(['home']);
  }
  goFriendRequestList(){
    this.route.navigate(['home/friends']);
  }
  goUserPage(){
    this.route.navigate(['user/detail']);
  }
}
