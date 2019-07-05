import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinsurancesRoutingModule } from './userinsurances-routing.module';
import { UserinsuranceListComponent } from './userinsurance-list/userinsurance-list.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [UserinsuranceListComponent],
  imports: [
    CommonModule,
    UserinsurancesRoutingModule,
    NavbarModule,
    AlertModule.forRoot()
  ]
})
export class UserinsurancesModule { }
