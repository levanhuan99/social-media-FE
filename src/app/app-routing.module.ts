import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';



const routes: Routes = [
  {
    path: 'user', component: LayoutComponent,
    children: [
      {path: 'home', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
    ]
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
