import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http : HttpClient) { }

  getStudent(){
    return this._http.get<any>("http://localhost:3000/api/student");
  }
  saveStudent(obj){
    
    return this._http.post<any>("http://localhost:3000/api/student", obj);
  }
}
