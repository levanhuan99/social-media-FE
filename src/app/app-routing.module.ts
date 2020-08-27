import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {LayoutComponent} from './home-layout/layout.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'home', component: LayoutComponent,

    children: [
      {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)}
    ]
  },
  {
    path:'user',component:UserDetailComponent,
    children: [
      {path: '',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
    ]
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
