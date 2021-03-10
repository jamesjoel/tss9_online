import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private _http:HttpClient) { }

  Url='http://localhost:3000/admin/brand';
  getbrand(){
    return this._http.get(this.Url);
  }
  storebrand(obj){
    return this._http.post<any>(this.Url,obj);
  }
  editbrand(obj){
    return this._http.put<any>(this.Url+"/"+obj._id,obj);
  }
  deletebrand(obj){
    return this._http.delete<any>(this.Url+"/"+obj._id);
  }
}
