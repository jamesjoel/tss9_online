import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  Showmsg=false;
  msg;
  logger={
    email:'',
    password:''
  }
  constructor(private _auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  dologin(){
    
   // console.log(this.logger);
     this._auth.loginauth(this.logger).subscribe((result)=>{
      // console.log(result.token);
      localStorage.setItem('token',result.token);
     // console.log(result.token);
      this.router.navigate(["/"]);

  },
  (err)=>{
      if(err.error.type==1){
        this.Showmsg=true;
        this.msg='incorect user and password';
        console.log(err);
      } 
      else if(err.error.type==2){
        this.Showmsg=true;
        this.logger.password='';
         this.msg='incorect password';
      } 
  });
}

}
