import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student = [
    {
      name : "rohit joshi",
      age : 25,
      fee : 5000,
      gender : "male"
    },
    {
      name : "jaya verma",
      age : 20,
      fee : 4500,
      gender : "female"
    },
    {
      name : "gaurav sharma",
      age : 27,
      fee : 10000,
      gender : "male"
    },
    {
      name : "nilesh sahu",
      age : 28,
      fee : 4200,
      gender : "male"
    }
  ];

  

  constructor() {

   }

  ngOnInit() {
  }


  demo(x){
    console.log(x.innerHTML); // <p>hello world</p>
  }
}
