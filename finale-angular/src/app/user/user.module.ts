import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryService } from '../services/category.service';
import { ProductBoxComponent } from './shared/product-box/product-box.component';
import { ProductService } from '../services/product.service';
import { PaginationComponent } from './pages/pagination/pagination.component';
import { PageService } from '../services/page.service';
import { MycartComponent } from './pages/mycart/mycart.component';



@NgModule({
  declarations: [UserComponent, HomeComponent, AboutComponent, ContactComponent, LoginComponent, SignupComponent, HeaderComponent, FooterComponent, ProductBoxComponent, PaginationComponent, MycartComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  providers : [CategoryService, ProductService, PageService]
})
export class UserModule { }
