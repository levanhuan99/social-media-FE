import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostsComponent} from './posts/posts.component';
import {AuthGuard} from '../guard/auth.guard';

const routes: Routes = [

  //không nên để canActiveRoute ở phần gọi module
  {
    path: '',
    component: PostsComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}

