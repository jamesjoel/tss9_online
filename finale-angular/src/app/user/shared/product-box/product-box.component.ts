import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() pro;
  @Output() cartEvent = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  send(obj){
    this.cartEvent.emit(obj);
  }

}
