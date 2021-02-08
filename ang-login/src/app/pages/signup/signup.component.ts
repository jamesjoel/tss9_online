import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  user : FormGroup;
  checkSubmit = false;
  // define a variable by FormGroup for form-data

  /*
  user = {
    name : "",
    email : ""
  }

  */

  constructor(private _fb : FormBuilder) { 
    this.user = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_pass : ["", Validators.required]
      // contact : ["", Validators.required]
      // image : ["", Validators.required]
    })

  }

  ngOnInit() {
  }

  save(){
    this.checkSubmit=true;

    if(this.user.invalid){
      return;
    }
    // console.log(this.user.value);
    let obj = this.user.value;
    
  }

}
