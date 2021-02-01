import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user={
    full_name : "",
    username : "",
    password : "",
    address : "",
    city : "",
    gender : ""
  };
  constructor(private _user : UserService, private _router : Router) { }

  ngOnInit() {
  }

  add(){
    this._user.signup(this.user).subscribe((result)=>{
      // console.log(result);
      // res.redirect("/login")
      this._router.navigate(["/login"]);
    })
  }

}
