import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinsurancesRoutingModule } from './userinsurances-routing.module';
import { UserinsuranceListComponent } from './userinsurance-list/userinsurance-list.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AlertModule } from 'ngx-bootstrap/alert';
import { DefaultLayoutModule } from 'src/app/containers/default-layout/default-layout.module';


@NgModule({
  declarations: [UserinsuranceListComponent],
  imports: [
    CommonModule,
    UserinsurancesRoutingModule,
    NavbarModule,
    AlertModule.forRoot(),
    DefaultLayoutModule
  ]
})
export class UserinsurancesModule { }
