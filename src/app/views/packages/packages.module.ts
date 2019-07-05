import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    ReactiveFormsModule,
    NavbarModule
  ]
})
export class PackagesModule { }
