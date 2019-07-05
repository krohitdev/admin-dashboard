import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  // {
  //   path:"login",
  //   component: LoginComponent,
  //   data:{
  //     title:"Login Page"
  //   }
  // },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./views/packages/packages.module').then(mod => mod.PackagesModule)
  },
  {
    path: 'insurances',
    loadChildren: () => import('./views/insurances/insurances.module').then(mod => mod.InsurancesModule)
  },
  {
    path: 'user-insurances',
    loadChildren: () => import('./views/userinsurances/userinsurances.module').then(mod => mod.UserinsurancesModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./views/users/users.module').then(mod=> mod.UsersModule)
  }
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
