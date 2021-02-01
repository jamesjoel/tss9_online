import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000/api/signup";
  constructor(private _http : HttpClient) { }

  signup(obj){
    return this._http.post<any>(this.apiUrl, obj);
    
  }
}
