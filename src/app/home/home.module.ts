import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './posts/posts.component';
import {HomeRoutingModule} from './home-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { FindFriendsComponent } from './find-friends/find-friends.component';
import { FriendListComponent } from './friend-list/friend-list.component';


@NgModule({
  declarations: [
    PostsComponent,
    FindFriendsComponent,
    FriendListComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {
}
