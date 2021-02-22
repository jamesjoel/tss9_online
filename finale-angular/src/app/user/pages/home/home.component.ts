import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product=[];
  constructor(private _proServ : ProductService) {
    this._proServ.getall().subscribe((result)=>{
      this.product = result;
    })
   }

  ngOnInit() {
  }

}
