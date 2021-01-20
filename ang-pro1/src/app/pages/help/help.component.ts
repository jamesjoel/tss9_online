import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  n=0;
  m=0;
  
  color="blue";
  s = 25;
  
  
  boxcolor="#852147";
  h=100;
  w=100;
  
  x = "TSS";
  z=100;


  a = "green";



  mo(){
    this.boxcolor="green";
  }
  mm(){
    this.h++;
    this.w++;
  }
  mout(){
    this.boxcolor="#852147";
    this.h=100;
    this.w=100;
  }







  counter(){
    console.log("hello world");
    this.n++;
    
  }
  demo3(){
    this.m++;
  }

  demo()
  {
    this.x="Welcome";
  }
  demo2()
  {
    this.x="TSS";
  }

  constructor() { }

  ngOnInit() {
  }







}
