import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
// import {EditAccountComponent} from './edit-account/edit-account.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { UserSideleftComponent } from './user-sideleft/user-sideleft.component';
import { UserSiderightComponent } from './user-sideright/user-sideright.component';
import { UserInforComponent } from './user-infor/user-infor.component';





@NgModule({
  declarations: [
    // EditAccountComponent,
    UserDetailComponent,
    UserHeaderComponent,
    UserTopbarComponent,
    UserSideleftComponent,
    UserSiderightComponent,
    UserInforComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
