import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  firstname = "rohit";
  lastname="joshi";


  constructor() { }

  ngOnInit() {
  }

}
