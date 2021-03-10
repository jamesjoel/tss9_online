import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/pages/home/home.component';
import { CategoryComponent } from './admin/pages/category/category.component';
import{ AddcategoryComponent } from './admin/pages/addcategory/addcategory.component';
import{ BrandComponent } from './admin/pages/brand/brand.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BackdorGuard } from './guards/backdor.guard';
import { SubcategoryComponent } from './admin/pages/subcategory/subcategory.component';
import { ProfileComponent } from './admin/pages/profile/profile.component';
import { AddproductComponent } from './admin/pages/addproduct/addproduct.component';
import { ColorComponent } from './color/color.component';
import { SizesComponent } from './admin/pages/sizes/sizes.component';
import { EditcategoryComponent } from './admin/pages/editcategory/editcategory.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { DemoComponent } from './admin/pages/demo/demo.component';
const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path : "admin",
    canActivate:[BackdorGuard],
    component : HomeComponent
  },
  {
    path:"admin/category",
    canActivate:[BackdorGuard],
    component : CategoryComponent
  },
  {
    path : "admin/demo",
    component : DemoComponent
  },
  {
    path:"admin/addcategory",
    canActivate:[BackdorGuard],
    component:AddcategoryComponent
  },
  {
    path:"admin/brand",
    canActivate:[BackdorGuard],
    component:BrandComponent
  },
  {
    path:"admin/subcategory",
    canActivate:[BackdorGuard],
    component:SubcategoryComponent
  },
  {
    path:"admin/addproduct",
    canActivate:[BackdorGuard],
    component:AddproductComponent
  },
  {
    path:"admin/product",
    canActivate:[BackdorGuard],
    component:ProductComponent
  },
  {
    path:"admin/color",
    canActivate:[BackdorGuard],
    component:ColorComponent
  },
  {
    path:"login",
    component:LoginComponent
},
{
  path:"register",
  component:RegisterComponent
},
{
path:"admin/profile",
component:ProfileComponent
},
{
  path:"admin/size",
  component:SizesComponent
},
{
  path:"admin/edit/category/:id",
  component:EditcategoryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
