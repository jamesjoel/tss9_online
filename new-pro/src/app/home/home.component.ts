import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arr=[
    {
    name : "",
    age : null,
    city :""
    }
];
  
  
  show=false;
  constructor() { }

  demo={
    name : "",
    age : null,
    city : ""
  }

 

  ngOnInit() {
  }
  add(){
    this.arr.push(this.demo);
      
    this.demo = {... { name : "", age : null, city : ""} };
  }
  remove(n){
   
    this.arr.splice(n, 1);
  }
  save(){
    this.show = true;
  }

  edit(){
    this.show = false;
  }
}
