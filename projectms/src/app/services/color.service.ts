import { Injectable } from '@angular/core';
//import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private _http:HttpClient) { }
  Url="http://localhost:3000/admin/color";

  addcls(obj){
    console.log(obj);
    return this._http.post<any>(this.Url,obj);
  }
}
