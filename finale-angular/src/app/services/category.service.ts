import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "http://localhost:3000/api/category";
  constructor(private _http : HttpClient) { }

  save(obj){
    return this._http.post<any>(this.apiUrl, obj, 
      { headers : { Authorization : localStorage.getItem("admintoken") } });
  }
}
