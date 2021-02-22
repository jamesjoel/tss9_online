import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  category=[];
  constructor(private _cateServ : CategoryService) {
    this._cateServ.getall().subscribe((result)=>{
      this.category = result;
    })
   }

  ngOnInit() {
  }



}
