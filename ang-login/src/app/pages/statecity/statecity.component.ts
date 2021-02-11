import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-statecity',
  templateUrl: './statecity.component.html',
  styleUrls: ['./statecity.component.scss']
})
export class StatecityComponent implements OnInit {

  arr=[];
  cityarr=[];
  state="";
  constructor(private _city : CityService) {
    this._city.getCityState().subscribe((result)=>{
      this.arr = result;
    })
   }

  ngOnInit() {
  }

  getcity(){
    // console.log(this.state);
    // this.user.state.value
    this._city.getcity(this.state).subscribe((result)=>{
      // console.log(result);
      this.cityarr = result;
    })
  }

}
