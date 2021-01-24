import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  newStudent={
    name : "",
    age : null,
    city : "",
    fee : null,
    gender : ""
  }

  student=[
    {
      name : "rohit",
      age : 25,
      city : "indore",
      fee : 5000,
      gender : "male"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

  add(){
    this.student.push(this.newStudent);
  }
  empty(){
    this.newStudent = {
      name : "",
      age : null,
      city : "",
      fee : null,
      gender : ""
    }
  }

}
