import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Post} from '../../models/Post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  userName: string;
  form: FormGroup = new FormGroup({
    status: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(private activeRoute: ActivatedRoute, private token: TokenStorageService,private postService:PostService) {
  }

  id = +this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.userName = this.token.getUserName();
  }

  submit() {
    // console.log(this.form.value.content);
    // console.log(this.form.value.status);
    const accountId = +this.token.getId();
    const  post:Post={
      content:this.form.value.content,
      status:this.form.value.status,
      account:{
        id:accountId
      }

    }
    this.postService.createPost(post).subscribe(resp=>{
      console.log("OK");
    });
    this.form.value.content.setValue='';
  }

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
}
