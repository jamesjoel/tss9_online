import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http : HttpClient) { }

  getEmp(id = ""){
    return this._http.get<any>("http://localhost:3000/api/employee/"+id);
  }
}
