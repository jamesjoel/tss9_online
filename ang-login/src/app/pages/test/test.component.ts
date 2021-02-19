import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  user :  FormGroup;
  submitCheck = false;
  
  constructor(private _fb : FormBuilder) {
    this.user = this._fb.group({
      name : ["", Validators.required],
      age : ["", Validators.required],
      city : ["", Validators.required]
    })
   }

  ngOnInit() {
  }
  submit(){
    this.submitCheck = true;
    if(this.user.invalid){
      return false;
    }
    console.log(this.user.value);
  }


  do_edit(){
    let obj = {
      name : "rohit",
      age : 20,
      city : 3
    };

    this.user.setValue(obj);
  }
}
