import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';


@NgModule({
  declarations: [
    UpdateUserComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
