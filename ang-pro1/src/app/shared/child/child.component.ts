import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

// @ is a decorator, and the decorators a pre defined data type in angular
  @Input() childArr;
  @Output() childEvent = new EventEmitter();

  childMsg = "This is child message  -------------";
  constructor() {
    
   }

  ngOnInit() {
    
  }

  demo(){
    this.childEvent.emit(this.childMsg);
  }

}
