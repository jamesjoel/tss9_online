import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = "http://localhost:3000/api/employee";
 
  constructor(private _http : HttpClient) { }

  getEmp(){
    return this._http.get<any>(this.apiUrl);
  }
  addEmp(obj){
    return this._http.post<any>(this.apiUrl, obj);
  }
  deleteEmp(obj){
    return this._http.delete<any>(this.apiUrl+"/"+obj._id);
  }
  editEmp(obj){
    return this._http.put<any>(this.apiUrl+"/"+obj._id, obj);
    // localhost:3000/api/employee/15
  }


}
/*


  this._http.get(".....").subscribe((result)=>{

  })

*/
