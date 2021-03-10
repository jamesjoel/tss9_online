import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor( private _http:HttpClient ) { }
  caturl="http://localhost:3000/admin/category";
  cattotal="http://localhost:3000/admin/subcategorytotal";
  url="http://localhost:3000/admin/subcategory";
  categories()
  {
     return this._http.get<any>(this.caturl);
  }
  addsusb(obj){
           return this._http.post<any>(this.url,obj);
  }
  subcategories(perpage){
    return this._http.get<any>(this.url+'/'+perpage);
  }
  subdelete(obj){
    return this._http.delete<any>(this.url+'/'+obj._id);
  }
  totalrow()
  {
    return this._http.get<any>(this.cattotal);
  }
  getskip(a,b){
    alert(b);
    alert(a);
    return this._http.get<any>(this.url+'/'+a+'/'+b);
  }
}
