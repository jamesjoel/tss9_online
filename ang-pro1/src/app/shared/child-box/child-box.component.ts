import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'child-box',
  templateUrl: './child-box.component.html',
  styleUrls: ['./child-box.component.scss']
})
export class ChildBoxComponent implements OnInit {

  childMsg = "this is child message";

  @Output() messageEvent = new EventEmitter();
  // this @Output() event will through value to parent component


  constructor() { }

  demo(){
    console.log("--------------");
    this.messageEvent.emit(this.childMsg);
  }

  ngOnInit() {
  }

}
