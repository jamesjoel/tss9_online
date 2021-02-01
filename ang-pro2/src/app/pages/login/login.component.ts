import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user={
    username : "",
    password : ""
  }

  constructor(private _login : LoginService) { }

  ngOnInit() {
  }

  login(){
    this._login.do_login(this.user).subscribe((result)=>{
      console.log(result);
    })
  }
}
