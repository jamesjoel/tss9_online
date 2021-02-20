import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost:3000/api/product";

  constructor(private _http: HttpClient) { }

  save(obj){
    return this._http.post<any>(this.apiUrl, obj, 
      { headers : { Authorization : localStorage.getItem("admintoken") } });
  }
  getall(){
    return this._http.get<any>(this.apiUrl, 
      { headers : { Authorization : localStorage.getItem("admintoken") } });
  }
  delete(obj){
    return this._http.delete<any>(this.apiUrl+"/"+obj._id, 
      { headers : { Authorization : localStorage.getItem("admintoken") } });
  }
  update(obj){
    return this._http.put<any>(this.apiUrl+"/"+obj._id, obj, 
      { headers : { Authorization : localStorage.getItem("admintoken") } });
  }
}
