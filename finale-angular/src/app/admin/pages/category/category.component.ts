import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category : FormGroup;
  checkSubmit = false;
  constructor(private _fb : FormBuilder, private _cateServ : CategoryService) {
    this.category = this._fb.group({
      name : ["", Validators.required]
    })
   }

  ngOnInit() {
  }

  add(){
    this.checkSubmit = true;
    if(this.category.invalid){
      return;
    }
    this._cateServ.save(this.category.value).subscribe((result)=>{
      console.log(result);
    })
  }
}
