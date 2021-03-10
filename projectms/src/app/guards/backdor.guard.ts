import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdorGuard implements CanActivate {

  constructor(private _router:Router){}
  canActivate(){  
    if(localStorage.getItem('token')){
    return true;
    }
    else
    { 
     // alert();
      this._router.navigate(['login']);
    }
  }
  
}
