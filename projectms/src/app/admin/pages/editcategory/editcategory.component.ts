import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { FormGroup,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent implements OnInit {
 
 editcategory:FormGroup;
 checksubmit=false;
  constructor(private actroute:ActivatedRoute,private cat:CategoryService,private _fb:FormBuilder,private _route:Router) {
    let id=this.actroute.snapshot.params.id;
    this.cat.edit(id).subscribe((result)=>{
    //  this.editcat=result;       
    this.editcategory=this._fb.group({
      name:[result.name,Validators.required],
      meta_title:[result.meta_title,Validators.required],
      id:[result._id]
    });
   
    })
 

   }
validt(){
  this.checksubmit=true;
  if(this.editcategory.invalid){
    return;
  }
  this.cat.updatecat(this.editcategory.value).subscribe((result)=>{
     if(result.nModified==1){
       this._route.navigate(['/admin/category']);
     }
     
  });

}

  ngOnInit() {
  }

}
