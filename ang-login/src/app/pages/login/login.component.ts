import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username : "",
    password : ""
  };
  showMsg = false;
  msg = "";


  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit() {
  }

  login(){
    this._auth.do_login(this.user).subscribe((result)=>{
      // console.log(result);
      localStorage.setItem("token", result.token);
      this._router.navigate(["/dashboard"]);

    }, (err)=>{
      //console.log(err.error);
      if(err.error.type==1){
        this.showMsg=true;
        this.msg = "This Username And Password is Incorrect !";
      }
      if(err.error.type==2)
      {
        this.showMsg=true;
        this.msg = "This Password is Incorrect !";
        this.user.password = "";

      }
    })
  }

}
