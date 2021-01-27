import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public x : TestService) { }

  ngOnInit() {
  }
  clickme(){
    let ans =this.x.abc(15, 20);
    console.log(ans);
  }

}
