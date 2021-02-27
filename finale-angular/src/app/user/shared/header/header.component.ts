import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  category=[];
  cartTotal;
  constructor(private _cateServ : CategoryService, private _cartServ : CartService) {
    this._cateServ.getall().subscribe((result)=>{
      this.category = result;
    });
    this._cartServ.cart.subscribe((result)=>{
      this.cartTotal = result;
    })

   }

  ngOnInit() {
  }



}
