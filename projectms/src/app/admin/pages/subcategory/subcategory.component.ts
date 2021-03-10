import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { SubcategoryService } from '../../../services/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  singlesub;
  cat;
  aa=0;
  subcat;
  total=0;
  perpage=2;
  totalPages;
  subcategory:FormGroup;
  checksubmit=false;
  constructor(private _fb:FormBuilder,private _sub:SubcategoryService) { 
  this.subcategory=this._fb.group({
    _id : [""],
    name:['',Validators.required],  
    category:['',Validators.required],
    meta_title:['',Validators.required],
    image:['',Validators.required]
  });
  this.myfun();
this._sub.subcategories(this.perpage).subscribe((result)=>{
       this.subcat=result;
this._sub.totalrow().subscribe((result)=>{
  this.total=result.total;
  this.totalPages=Math.ceil(this.total/this.perpage);
  //alert(this.total);
})       
});
}
addsub(x){
 // alert();
   this.checksubmit=true;
  if(this.subcategory.invalid){
  return;
  }
  else{
   let filedata=x.files[0];
   let form = new FormData();
    let obj=this.subcategory.value;
   // console.log(obj.name);
    form.append('myfile',filedata);
    form.append('name',obj.name);
    form.append('category',obj.category);
    form.append('meta_title',obj.meta_title);
     this._sub.addsusb(form).subscribe((result)=>{
       if(result._id){
         this.subcat.push(result);
           document.getElementById('Closemodal').click();
       }
    });
  }
}
myfun(){
    this._sub.categories().subscribe((result)=>{
     this.cat=result;
     //alert(this.cat);
    })
}
empty(){
  {
    this.subcategory.setValue({_id:'',name:'',category:'',image:''});
    this._sub.categories().subscribe((result)=>{
      this.cat=result;
     });

  }
}
askedit(obj)
{
  console.log(obj);
  this.subcategory.setValue(obj);
}
askdelete(s){
  this.singlesub=s;
}
dodelete(){
  this._sub.subdelete(this.singlesub).subscribe((result)=>{
    if(result.deletedCount==1){
      let n = this.subcat.indexOf(this.singlesub);
      this.subcat.splice(n,1);
      document.getElementById('Dclosemodal').click();
    }
  })
}
pagecall(a){
  this.aa=a;
  this._sub.getskip(this.perpage,a).subscribe((result)=>{
    this.subcat=result;
  })
}
  ngOnInit() {
  }

}
