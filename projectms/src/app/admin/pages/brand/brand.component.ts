import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
branddata;
  brand={
       _id:'',
        name:'',
        meta_title:''
  }
  constructor(private _brands:BrandService) { 
    this._brands.getbrand().subscribe((result)=>{
         console.log(result);
         this.branddata=result;
    })
  }

  ngOnInit() {
  }

  addbrand(){
    if(this.brand._id){
      this._brands.editbrand(this.brand).subscribe((result)=>{
        if(result.nModified==1){
          for(let i=0; i<this.branddata.length; i++){
            if(this.branddata[i]._id==this.brand._id){
              this.branddata[i]=this.brand;              
            }
          }
               document.getElementById('Closemodal').click();
        }
      });
    }
    else{
     this._brands.storebrand(this.brand).subscribe((result)=>{
            if(result._id){
              this.branddata.push(result);
                document.getElementById('Closemodal').click();
            }
     });
    }
}
empty(){
  this.brand={
      _id:"",
      name:"",
      meta_title:""
  }
}
askedit(obj){
  this.brand={...obj};
}
askdelete(obj){
  this.brand=obj;
}
yesdelete(){
     this._brands.deletebrand(this.brand).subscribe((result)=>{
     if(result.deletedCount==1){
      let n=this.branddata.indexOf(this.brand);
      this.branddata.splice(n,1);
      document.getElementById('Dclosemodal').click();
     }
    
     
  });
}
}