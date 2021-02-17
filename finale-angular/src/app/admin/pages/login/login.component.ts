import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  admin = {
    username : "",
    password : ""
  }
  msg;
 

  constructor(private _loginServ : LoginService, private _router : Router) { }

  ngOnInit() {
  }
  login(){
    this._loginServ.do_login(this.admin).subscribe((result)=>{
      // console.log("----------", result);
      localStorage.setItem("admintoken", result.token);
      this._router.navigate(["/admin/product"]);
    }, (err) =>{
      
      
      if(err.error.type==1){
        this.msg = "This Username and Password is Incorrect !";
      }
      if(err.error.type==2)
      {
        
        this.msg = "This Password is Incorrect !";
      }
    })
  }

}
