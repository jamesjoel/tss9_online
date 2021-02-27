import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  product=[];
  cartArr=[];
  constructor(private _proServ : ProductService, private _cartServ : CartService) {
    this._proServ.getall().subscribe((result)=>{
      this.product = result;
    })
   }

  
 
  ngOnInit(){

  }

  addToCart(obj){
    // console.log("-----", obj);
    this.cartArr.push(obj);
    let total=0;
    if(localStorage.getItem("cart"))
    {
      let arrString = localStorage.getItem("cart");
      let arr = JSON.parse(arrString);
      arr.push(obj);
      localStorage.setItem("cart", JSON.stringify(arr));
      total = arr.length;
    }
    else{
      // we can not store array, object in localStorege thats why we conver array to string
      localStorage.setItem("cart", JSON.stringify(this.cartArr));
      total = this.cartArr.length;
    }

    this._cartServ.updateCart(total);
  }
}
