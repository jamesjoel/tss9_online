import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// lazy loading feature in Angular
const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import('./admin/admin.module').then(m=>m.AdminModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
 user module routes

  :4200
  :4200/about
  :4200/contact
  :4200/login
  :4200/signup
  :4200/dashboard
  :4200/profile
  :4200/myaccount

************************************************
 admin module routes

  :4200/admin
  :4200/admin/product/view
  :4200/admin/product/add
  :4200/admin/category/add
  :4200/admin/category/view
  :4200/admin/users




  www.test.com/about    ---- component



*/