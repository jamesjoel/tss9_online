import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  msg;
  parentArr = [
    {
      name : "rohit",
      age : 25
    },
    {
      name : "jaya",
      age : 23
    }
  ]


  recMessage(a){
    //console.log(a);
    this.msg=a;
  }
  constructor() { }

  ngOnInit() {
  }

}
