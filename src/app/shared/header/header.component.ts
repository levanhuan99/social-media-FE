import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formHeader: FormGroup;

  userName: string;

  user2: Account[];

  constructor(private route: Router, private  activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {

  }

  submit(value) {
    this.userName = value.target.value;

    this.route.navigate(['home/search'], {

      queryParams: {
        q: this.userName
      }
    });
    this.userService.searchFriends(this.userName).subscribe((rep: Account[]) => {
      this.user2 = rep;

    });


  }

}
