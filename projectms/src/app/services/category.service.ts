import { Injectable } from '@angular/core';
import {HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  
  Url='http://localhost:3000/admin/category';

  getcategory()
  {
    return this._http.get<any>(this.Url);
  }
  storecategory(obj)
  {
    return this._http.post<any>(this.Url,obj);
  }
  edit(id){
     return  this._http.get<any>(this.Url+'/'+id);
  }
  updatecat(obj){
    return this._http.put<any>(this.Url+'/'+obj.id,obj);
  }
  dodlt(obj){
    return this._http.delete<any>(this.Url+'/'+obj._id);
  }
}
