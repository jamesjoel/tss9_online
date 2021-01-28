import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = "http://localhost:3000/api/employee";
 
  constructor(private _http : HttpClient) { }

  getEmp(){
    return this._http.get(this.apiUrl);
  }
  addEmp(obj){
    return this._http.post(this.apiUrl, obj);
  }


}
/*


  this._http.get(".....").subscribe((result)=>{

  })

*/
