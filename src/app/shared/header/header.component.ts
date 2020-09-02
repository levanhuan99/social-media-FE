import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  formHeader: FormGroup;

  userName: string;

  constructor(private route: Router, private  activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  submit(value) {
    this.userName = value.target.value;
    console.log(this.userName);

    this.route.navigate(['home/search'], {
      queryParams: {
        q: this.userName
      }
    });
  }

}
