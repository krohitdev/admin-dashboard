import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { NavbarModule } from '../navbar/navbar.module';
import { DefaultLayoutModule } from 'src/app/containers/default-layout/default-layout.module';



@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarModule,
    DefaultLayoutModule,
  ]
})
export class UsersModule { }
