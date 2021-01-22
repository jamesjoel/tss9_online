import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-box',
  templateUrl: './parent-box.component.html',
  styleUrls: ['./parent-box.component.scss']
})
export class ParentBoxComponent implements OnInit {

  constructor() { }
  parentMsg;

  recMessage(a){
    console.log(a);
    this.parentMsg=a;
  }

  ngOnInit() {
  }

}
