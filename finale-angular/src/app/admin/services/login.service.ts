import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiPath = "http://localhost:3000/api/admin/login";
  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }

  do_login(obj){
    return this._http.post<any>(this.apiPath, obj);
  }
  isLoggedIn(){
    if(localStorage.getItem("admintoken")){
      return true;
    }
    else{
      return false;
    }
  }
  logout(){
    localStorage.removeItem("admintoken");
    this._router.navigate(["/admin"]);
  }


}
