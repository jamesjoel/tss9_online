import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employes;
  employee = {
    _id : "",
    name : "",
    age : null,
    address : "",
    salary : null,
    gender : ""
  }

  constructor(private _emp : EmployeeService) {

    this._emp.getEmp().subscribe((result)=>{
      console.log("-----", result);
      this.employes = result;
    })
   }

  ngOnInit() {
  }


  add(){
    if(this.employee._id)
    {
      this._emp.editEmp(this.employee).subscribe((result)=>{
        // console.log(result);
        for(let i = 0; i <= this.employes.length; i++)
        {
          if(this.employes[i]._id == this.employee._id)
          {
            this.employes[i]=this.employee;
            break;
          }
        }
      })
    }
    else{
      this._emp.addEmp(this.employee).subscribe((result)=>{
        this.employes.push(result);
      })
    }
    
  }
  askDelete(obj){
    this.employee = obj;
  }

  delete(){
    this._emp.deleteEmp(this.employee).subscribe((result)=>{
      // console.log(result);
      let n = this.employes.indexOf(this.employee);
      this.employes.splice(n, 1);
    })
  }
  empty(){
    this.employee = {
      _id : "",
      name : "",
      age : null,
      address : "",
      salary : null,
      gender : ""
    }
  }
  askEdit(obj){
    // this.employee = obj;
    this.employee = {... obj}
  }


}
