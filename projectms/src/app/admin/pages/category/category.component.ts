import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/Category.service'; 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
 category;
 deletecat;
 
  constructor(private _category:CategoryService) {
    this._category.getcategory().subscribe((result)=>{
      console.log(result);
      this.category=result;
    });
   }
   storecategory(obj){
     return this.category
   }
   askdelete(obj)
   {
     console.log(obj);
     this.deletecat=obj;
   }
   dodelete()
   {
   //  alert();
     this._category.dodlt(this.deletecat).subscribe((result)=>{
       console.log('******',result);
       if(result.deletedCount==1){
         let n=this.category.indexOf(this.deletecat);
         this.category.splice(n,1);
           document.getElementById('dlt').click();
       }
     })
   }
  

  ngOnInit() {
  }
          
}
