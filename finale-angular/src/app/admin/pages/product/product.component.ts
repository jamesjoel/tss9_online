import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  proArr;
  product:FormGroup;
  checkSubmit = false;
  category;
  proObj;
  constructor(private _fb : FormBuilder, private _cateServ : CategoryService, private _proServ : ProductService) {
    this.product = this._fb.group({
      _id : [""],
      name : ["", Validators.required],
      price : ["", Validators.required],
      detail : ["", Validators.required],
      discount : ["", Validators.required],
      category : ["", Validators.required]
    });
    this._cateServ.getall().subscribe((result)=>{
      this.category = result;
    });
    this._proServ.getall().subscribe((result)=>{
      this.proArr = result;
    })
   }

  ngOnInit() {
  }
  add(){
    this.checkSubmit = true;
    if(this.product.invalid){
      return;
    }
    // console.log(this.product.value);

    if(this.product.value._id){
      this._proServ.update(this.product.value).subscribe((result)=>{
        if(result.nModified==1){
          // alert();
          
          for(var i = 0; i < this.proArr.length; i++)
          {
          
            if(this.proArr[i]._id == this.product.value._id)
            {
              this.proArr[i] = this.product.value;
              document.getElementById("closeBtnAdd").click();
              break;
            }
          }
        }
      })
    }else{
      this._proServ.save(this.product.value).subscribe((result)=>{
        // console.log(result);
        this.proArr.push(result);
        document.getElementById("closeBtnAdd").click();
      })

    }

  }
  empty(){
    // alert();
    this.product.setValue({
      _id : "",
      name : "",
      price : "",
      discount : "",
      detail : "",
      category : ""
    })
  }
  askDelete(obj){
    this.proObj = obj;
  }
  delete(){
    this._proServ.delete(this.proObj).subscribe((result)=>{
      if(result.n==1){
        document.getElementById("closeBtnDelete").click();
        let i = this.proArr.indexOf(this.proObj);
        this.proArr.splice(i, 1);
      }
    })
  }
  askEdit(obj){
    this.product.setValue(obj);
  }

}
