import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  @Input() childArr;
  @Output() editEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  edit(){
    this.editEvent.emit();
  }

}
