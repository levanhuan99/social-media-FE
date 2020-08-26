import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PostsComponent} from './posts/posts.component';
import {AuthGuard} from '../guard/auth.guard';


const routes: Routes = [

  {
    path: 'home',
    component: PostsComponent,canActivate:[AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}

