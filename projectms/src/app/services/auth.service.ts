import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { removeListener } from 'process';
import { Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:HttpClient,private _router:Router) { }
   
Url="http://localhost:3000/auth/login";
Regurl="http://localhost:3000/auth/register"

loginauth(obj){
return this.auth.post<any>(this.Url,obj);
}
doadmin(obj){
  return this.auth.post<any>(this.Regurl,obj);
}
profile()
  {
    return this.auth.get("http://localhost:3000/admin/profile",
    {headers:{Authorization:localStorage.getItem('token')}}
    );
  }
  profileedit(obj){
    return this.auth.put("http://localhost:3000/admin/profile/"+obj._id,obj);
  }
isloggedIn(){
  if(localStorage.getItem('token')){
    return true;
  }
  else
  {
    return false;
  }
}
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
  

}
