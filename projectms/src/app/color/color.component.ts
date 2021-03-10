import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { VariantsService } from '../services/variants.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  cat_color;
  category_color:FormGroup;
  checksubmit=false;
  constructor(private _cls:VariantsService,private _fb:FormBuilder) {
    this.category_color=this._fb.group({
   color_code:["",Validators.required],
   color_name:["",Validators.required]
    });

   this._cls.getvariant().subscribe((result)=>{
      this.cat_color=result;
   })
   }

  ngOnInit() {
  }
addcolor(){
  this.checksubmit=true;
  if(this.category_color.invalid){
    return false;
  }
  else{
         this._cls.addcls(this.category_color.value).subscribe((result)=>{
           console.log(result);
           this.cat_color.push(result);
         })
  }
}
doedit(obj){
  //console.log(obj);
  //alert(obj.color_code);
 this.category_color.value.color_code=obj.color_code;
 this.category_color.value.color_name=obj.color_name;
 //alert(this.category_color.value.color_code);
}
}
