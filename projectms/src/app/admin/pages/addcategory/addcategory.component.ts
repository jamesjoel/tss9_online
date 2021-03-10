import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/Category.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  newcatgory={
    name:"",
    meta_title:""
  }
  constructor(private _category:CategoryService,private _route:Router) { }

  ngOnInit() {
  }
  addcategory(){
    this._category.storecategory(this.newcatgory).subscribe((result)=>{
      if(result._id){
        this._route.navigate(['/admin/category']);
      }
    })
  }

}
