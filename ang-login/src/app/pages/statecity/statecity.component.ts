import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-statecity',
  templateUrl: './statecity.component.html',
  styleUrls: ['./statecity.component.scss']
})
export class StatecityComponent implements OnInit {

  arr=[];
  constructor(private _city : CityService) {
    this._city.getCityState().subscribe((result)=>{
      this.arr = result;
    })
   }

  ngOnInit() {
  }

}
