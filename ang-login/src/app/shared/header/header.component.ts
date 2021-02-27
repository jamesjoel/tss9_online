import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name ="rohit";
  constructor(public _auth : AuthService, public _demo : DemoService) { }
  total;
  ngOnInit() {
    this._demo.a.subscribe((result)=>{
      this.total = result;
    })
  }

}
