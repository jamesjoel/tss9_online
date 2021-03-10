import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  admin;
  constructor(private auth:AuthService,private rout:Router) { 
    this.auth.profile().subscribe((result)=>{
           this.admin=result;
     })
  }
  
  ngOnInit() {
  }
  profile(){
    this.auth.profileedit(this.admin).subscribe((result)=>{
      console.log(result);
      if(result){
        this.rout.navigate(['/']);
      }
    })
  }
}
