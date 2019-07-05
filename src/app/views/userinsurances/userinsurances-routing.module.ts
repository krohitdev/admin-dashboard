import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinsuranceListComponent } from './userinsurance-list/userinsurance-list.component';

const routes: Routes = [{
  path: '',
  component: UserinsuranceListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserinsurancesRoutingModule { }
