import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

import { HelpComponent } from './pages/help/help.component';

import { ServiceComponent } from './pages/service/service.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [
  {
    path : "",  // localhost:4200
    component : HomeComponent
  },
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "service",
    component : ServiceComponent
  },
  {
    path : "about", // localhost:4200/about
    component : AboutComponent
  },
  {
    path : "contact", // localhost:4200/contact
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
