import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from '../navbar/navbar.module';
import { DefaultLayoutModule } from 'src/app/containers/default-layout/default-layout.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavbarModule,
    DefaultLayoutModule
  ]
  
})
export class HomeModule { }
