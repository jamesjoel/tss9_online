import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
proimg;
cat;
subcate;
brands;
color;
size;
urls=[];
images=[];
checksubmit=false;
myproduct:FormGroup;
  constructor(private _fb:FormBuilder,private _product:ProductsService) {
    this.myproduct=this._fb.group({
       name:[''],
       category_id:[''],
       subcategory_id:[''],
       brand_id:[''],
       unit:[''],
       min_qty:[''],
       colors:[''],
       size:[''],
       unit_price:[''],
       purchase_price:[''],
       product_img:[''],
       thumbnail_img:[''],
       tax:[''],
       tax_type:[''],
       discount:[''],
       discount_type:[''],
       description:['']
      });
       this._product.categories().subscribe((result)=>{
//console.log(result);
          this.cat=result;
       })
       this._product.brand().subscribe((result)=>{
  //       console.log(result);
         this.brands=result;
       })
       this._product.color().subscribe((result)=>{
    //     console.log(result);
         this.color=result;
       })
       this._product.size().subscribe((result)=>{
         this.size=result;
       })
   }
   addpro(x){
    console.log(this.images);
     this.checksubmit=true;
  if(this.myproduct.invalid){
     return;    
   }
   alert();
   let object=this.myproduct.value
  // let filedata:FileList=x.files;
  let sfiledata=x.files[0];
   let form = new FormData(); 

   
  form.append('myfile',JSON.stringify(this.images));
   console.log("-------------", this.images);
   form.append('sfiledata',sfiledata);
   form.append('object',JSON.stringify(object));
 //    console.log(this.myproduct.value);
     this._product.product(form).subscribe((result)=>{

       console.log(result);
     })
   }
   get_subcate(a){
    // alert(a.value);
let   id=a.value;
    this._product.get_subcatby_cat(id).subscribe((result)=>{
      this.subcate=result;
      console.log(result);
    })
   }

  ngOnInit() {
  }

  multi_img(event,x){
    for(var i=0; i<x.files.length; i++){
      this.images.push(x.files[i]);
      console.log(x);
    if(event.target.files){
      var reader= new FileReader()
      reader.readAsDataURL(event.target.files[i])

      reader.onload=(event:any)=>{
       // alert(event.target.result);
        this.urls.push(event.target.result);
        console.log(this.urls);
      }
    }
    }    
  }
}
