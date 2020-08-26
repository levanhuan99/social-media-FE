import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './guard/auth.guard';
import {RegisterComponent} from './auth/register/register.component';
import {HeaderComponent} from './shared/header/header.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {
    path: 'user', component: LayoutComponent,

    children: [
      {path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
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
