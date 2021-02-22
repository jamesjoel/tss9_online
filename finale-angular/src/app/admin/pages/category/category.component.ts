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
  cateArr;

  cateObj;

  checkSubmit = false;
  constructor(private _fb : FormBuilder, private _cateServ : CategoryService) {
    this.category = this._fb.group({
      _id : [""],
      name : ["", Validators.required]
    });
    this._cateServ.getall().subscribe((result)=>{

      this.cateArr = result;
      // console.log(this.cateArr);
    })
   }

  ngOnInit() {
  }

  add(){
    this.checkSubmit = true;
    if(this.category.invalid){
      return;
    }
    if(this.category.value._id){
      //alert();
      this._cateServ.update(this.category.value).subscribe((result)=>{
        if(result.nModified==1){
          // alert();
          
          for(var i = 0; i < this.cateArr.length; i++)
          {
          
            if(this.cateArr[i]._id == this.category.value._id)
            {
              this.cateArr[i] = this.category.value;
              document.getElementById("closeBtnAdd").click();
              break;
            }
          }
        }
      })
    }
    else{
      this._cateServ.save(this.category.value).subscribe((result)=>{
        // console.log(result);
        this.cateArr.push(result);
        document.getElementById("closeBtnAdd").click();
      })

    }
  }

  askDelete(obj){
    this.cateObj = obj;
  }
  delete(){
    this._cateServ.delete(this.cateObj).subscribe((result)=>{
      // console.log(result);
      if(result.n==1){
        document.getElementById("closeBtnDelete").click();
        let i = this.cateArr.indexOf(this.cateObj);
        this.cateArr.splice(i, 1);
      }
    })
  }

  empty(){
    this.category.setValue({ _id : "", name : "" });
  }

  askEdit(obj){
    this.category.setValue(obj);
  }
}
/*

demo(a:number, b:String){



}

ser.demo(10, 20);



*/