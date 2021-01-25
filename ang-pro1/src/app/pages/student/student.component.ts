import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  newStudent={
    _id : null,
    name : "",
    age : null,
    city : "",
    fee : null,
    gender : ""
  }

  student=[
    {
      _id : 1,
      name : "rohit",
      age : 25,
      city : "indore",
      fee : 5000,
      gender : "male"
    },
    {
      _id : 2,
      name : "vinod",
      age : 24,
      city : "mumbai",
      fee : 5400,
      gender : "male"
    },
    {
      _id : 3,
      name : "nidhi",
      age : 20,
      city : "pune",
      fee : 4000,
      gender : "female"

    }
  ];



  constructor() { }

  ngOnInit() {
  }

  add(){
    /*
    remove after server implant
    */
    if(this.newStudent._id)
    {
      for(let i = 0; i < this.student.length; i++)
      {
        if(this.student[i]._id == this.newStudent._id)
        {
          this.student[i] = this.newStudent;
        }
      }
    }
    else{
      let n = this.student.length;
      n++;
      this.newStudent._id = n;

      this.student.push(this.newStudent);
    }




    
  }
  empty(){
    this.newStudent = {
      _id : "",
      name : "",
      age : null,
      city : "",
      fee : null,
      gender : ""
    }
  }

  askDelete(obj){
    console.log("-------------", obj);
    this.newStudent = obj;
  }

  confDelete(){
    let n = this.student.indexOf(this.newStudent);
    // console.log(n);
    this.student.splice(n, 1);
  }
  askEdit(obj){
    // this.newStudent = obj;

    this.newStudent = {... obj};
    // this code break binding but value transfer

  }

}
/*
  let arr = ["red", "green", "blue", "yellow"];
  let x = "blue";

  let n = arr.indexOf(x);



*/