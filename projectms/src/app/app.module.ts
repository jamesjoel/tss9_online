import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/shared/navbar/navbar.component';
import { SidenavComponent } from './admin/shared/sidenav/sidenav.component';
import { FooterComponent } from './admin/shared/footer/footer.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { CategoryComponent } from './admin/pages/category/category.component';
import { AddcategoryComponent } from './admin/pages/addcategory/addcategory.component';
import { BrandComponent } from './admin/pages/brand/brand.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SubcategoryComponent } from './admin/pages/subcategory/subcategory.component';
import { AddproductComponent } from './admin/pages/addproduct/addproduct.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { ColorComponent } from './color/color.component';
import { SizesComponent } from './admin/pages/sizes/sizes.component';
import { EditcategoryComponent } from './admin/pages/editcategory/editcategory.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { DemoComponent } from './admin/pages/demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    AddcategoryComponent,
    BrandComponent,
    LoginComponent,
    RegisterComponent,
    SubcategoryComponent,
    AddproductComponent,
    ProfileComponent,
    ColorComponent,
    SizesComponent,
    EditcategoryComponent,
    ProductComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
