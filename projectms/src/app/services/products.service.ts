import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http:HttpClient) { }

  caturl="http://localhost:3000/admin/category";  
  url="http://localhost:3000/admin/subcategory";
  Urls='http://localhost:3000/admin/brand';
  colorurl="http://localhost:3000/admin/color";
  sizeurl="http://localhost:3000/admin/size"; 
  prourl="http://localhost:3000/admin/product";

  categories()
  {
      return this._http.get(this.caturl);
  }
  brand(){
      return this._http.get(this.Urls);
  }
  get_subcatby_cat(id){
      return this._http.get<any>(this.url+'/'+id);

}
color(){
         return this._http.get<any>(this.colorurl);
}
size(){
         return this._http.get<any>(this.sizeurl);
}
product(obj){
        return this._http.post<any>(this.prourl,obj,
        {headers:{Authorization:localStorage.getItem('token')}});
}
get(){
  return this._http.get<any>(this.prourl,{headers:{Authorization:localStorage.getItem('token')}});
}
dlt(obj){
           return this._http.delete<any>(this.prourl+'/'+obj._id,
           {headers:{Authorization:localStorage.getItem('token')}});
}
}
