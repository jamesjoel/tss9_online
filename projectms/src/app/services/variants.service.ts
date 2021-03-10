import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VariantsService {

  constructor(private _http:HttpClient) { }
  Url="http://localhost:3000/admin/color";
  Surl="http://localhost:3000/admin/size"; 
  getvariant(){
   return this._http.get(this.Url);
  }

  addcls(obj){
    console.log(obj);
    return this._http.post<any>(this.Url,obj);
  }
  addsiz(obj){
    return this._http.post<any>(this.Surl,obj);
  }

  getsiz(){
    return this._http.get<any>(this.Surl);
  }
}
