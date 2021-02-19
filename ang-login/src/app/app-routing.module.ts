import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentComponent } from './pages/student/student.component';
import { StatecityComponent } from './pages/statecity/statecity.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { EditemployeeComponent } from './pages/editemployee/editemployee.component';
import { TestComponent } from './pages/test/test.component';



const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "signup",
    component : SignupComponent
  },
  {
    path : "dashboard",
    canActivate : [BackdoorGuard],
    component : DashboardComponent
  },
  {
    path : "profile",
    canActivate : [BackdoorGuard],
    component : ProfileComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "statecity",
    component : StatecityComponent
  },
  {
    path : "employee",
    component : EmployeeComponent
  },
  {
    path : "employee/edit/:id",
    component : EditemployeeComponent
  },
  {
    path : "test",
    component : TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
