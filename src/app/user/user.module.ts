import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {UserRoutingModule} from './user-routing.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
