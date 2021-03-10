import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
admin={
  email:'',
  firstname:'',
  lastname:'',
  password:'',
  confirm_password:''
}
  constructor(private _Auth:AuthService, private _router:Router) { }

  doadmin(){
     this._Auth.doadmin(this.admin).subscribe((result)=>{
     if(result){
      this._router.navigate(['/login']);
     }
    })
   
  }
  ngOnInit() {
  }

}
