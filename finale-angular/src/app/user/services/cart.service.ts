import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject(0);
  constructor() { 
    if(localStorage.getItem("cart")){
      let arrString = localStorage.getItem("cart");
      let arr = JSON.parse(arrString);
      let total = arr.length;
      this.cart.next(total); 
    }
  }

  updateCart(a){
    this.cart.next(a);
  }
}
