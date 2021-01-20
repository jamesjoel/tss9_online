import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'mini-info',
  templateUrl: './mini-info.component.html',
  styleUrls: ['./mini-info.component.scss']
})
export class MiniInfoComponent implements OnInit {

  @Input() newname;
  @Input() lname;

  constructor() { }

  ngOnInit() {
  }

}
