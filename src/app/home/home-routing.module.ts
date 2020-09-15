import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostsComponent} from './posts/posts.component';
import {AuthGuard} from '../guard/auth.guard';
import {FindFriendsComponent} from './find-friends/find-friends.component';
import {FriendListComponent} from './friend-list/friend-list.component';

const routes: Routes = [

  {
    path: '',
    component: PostsComponent, canActivate: [AuthGuard]
  },
  {
    path:'search',
    component:FindFriendsComponent,canActivate:[AuthGuard]
  },
  {
    path:'friends',
    component:FriendListComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}

