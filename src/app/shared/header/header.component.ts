import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  resultSearchFriends: Account[];

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.formHeader = new FormGroup({
      firstName: new FormControl()
    });
  }

  submit(value) {
    this.userName = value.target.value;

    this.route.navigate(['home/search'], {

      queryParams: {
        q: this.userName
      }
    });
  }


}
