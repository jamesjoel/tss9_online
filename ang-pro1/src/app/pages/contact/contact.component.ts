import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  firstname = "James";
  lastname = "Joel";

  color = ["red", "green", "blue", "yellow", "pink", "black"];

  users = [
    {
      name : "rohit",
      age : 25,
      city : "indore"
    },
    {
      name : "james",
      age : 23,
      city : "bhopal"
    },
    {
      name : "nidhi",
      age : 30,
      city : "mumbai"
    }
  ]


  constructor() { }

  ngOnInit() {
  }


  demo()
  {
    // alert("hello");
    console.log("demo calling");
  }

}
