import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BackdoorGuard } from './guards/backdoor.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { StudentComponent } from './pages/student/student.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
