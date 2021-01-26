import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  student;

  newStudent = {
    name : "",
    age : null,
    address : "",
    city : "",
    fee : null
  }
  
  constructor(private _http : HttpClient) {
    this._http.get("http://localhost:3000/api/demo").subscribe((result)=>{
      console.log(result);
      this.student = result;
    });
   }

  ngOnInit() {
  }


  add(){
    this._http.post("http://localhost:3000/api/demo", this.newStudent).subscribe((result)=>{
      // console.log(result);
      this.student.push(this.newStudent);
    })
  }
}
