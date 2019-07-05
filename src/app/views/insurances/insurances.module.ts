import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsurancesRoutingModule } from './insurances-routing.module';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [InsuranceListComponent],
  imports: [
    CommonModule,
    InsurancesRoutingModule,
    NavbarModule
  ]
})
export class InsurancesModule { }
