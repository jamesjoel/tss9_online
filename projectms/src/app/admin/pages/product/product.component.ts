import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
product;
deletecat;
  constructor(private _pro:ProductsService) { 
    this._pro.get().subscribe((result)=>{
      this.product=result;
      console.log(result);
    })
  }
askdelete(obj){
  this.deletecat=obj;
}
dodelete()
{
  this._pro.dlt(this.deletecat).subscribe((result)=>{
         console.log(result);          
  })
}
  ngOnInit() {
  }

}
