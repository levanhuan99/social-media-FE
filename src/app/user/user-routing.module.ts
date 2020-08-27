import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '../guard/auth.guard';
import {NgModule} from '@angular/core';

import {UserInforComponent} from './user-infor/user-infor.component';



const routes: Routes = [

  // {path:'',component:EditAccountComponent},
  {path:'detail',component:UserInforComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}

