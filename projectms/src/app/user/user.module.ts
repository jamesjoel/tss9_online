import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';


@NgModule({
  declarations: [UserComponent, HeaderComponent, FooterComponent, AboutComponent, ContactComponent, HomeComponent, MenuComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
