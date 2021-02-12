import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { Router } from '@angular/router';
// this.router.navigate([]);


@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  employee : FormGroup;
  formSubmitCheck = false;
  constructor(
    private _actRoute : ActivatedRoute,
    private _emp : EmployeeService,
    private _fb : FormBuilder
  ) {

    



    let id = this._actRoute.snapshot.params.id;  // 25
    this._emp.getEmp(id).subscribe((result)=>{
        // console.log(result);
        // this.employee.controls.name.value = result.name;
        this.employee = this._fb.group({
          name : [result.name, Validators.required],
          age : [result.age, Validators.required],
          salary : [result.salary, Validators.required],
        });
    });
   }

  ngOnInit() {
  }

  update(){
    this.formSubmitCheck=true;

    if(this.employee.invalid){
      return;
    }
    // console.log(this.user.value);
    let obj = this.employee.value;
  }
}
