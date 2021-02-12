import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employes;
  constructor(private _employee : EmployeeService) {
    this._employee.getEmp().subscribe((result)=>{
      this.employes = result;
    })

   }

  ngOnInit() {
  }

}
