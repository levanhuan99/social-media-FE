import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {



  constructor(private activeRoute:ActivatedRoute) {
  }

  id = +this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {

  }


}
