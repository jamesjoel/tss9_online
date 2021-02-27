import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {

  arr;
  totalItem;
  constructor(private _cartServe : CartService) {
    if(localStorage.getItem("cart")){
      let str = localStorage.getItem("cart");
      this.arr = JSON.parse(str);
    }

    this._cartServe.cart.subscribe((result)=>{
      this.totalItem = result;
    })
   }

  ngOnInit() {
  }
  remove(a){
    let n = this.arr.indexOf(a);
    this.arr.splice(n, 1);

    let str = localStorage.getItem("cart");
    let arr = JSON.parse(str);
    arr.splice(n, 1);
    localStorage.setItem("cart", JSON.stringify(arr));
    let total = arr.length;
    this._cartServe.updateCart(total);

  }

}
