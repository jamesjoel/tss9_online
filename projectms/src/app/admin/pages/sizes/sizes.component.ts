import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup} from '@angular/forms';
import { VariantsService } from '../../../services/variants.service';

@Component({
  selector: 'app-sizes',
  templateUrl: './sizes.component.html',
  styleUrls: ['./sizes.component.scss']
})
export class SizesComponent implements OnInit {
size;
  category_size:FormGroup;
  checksubmit=false;
  constructor(private _fb:FormBuilder,private _variants:VariantsService) { 
  this.category_size=this._fb.group({
    sizes:['',Validators.required],
    name:['',Validators.required]
  });
    
  this._variants.getsiz().subscribe((result)=>{
    console.log(result);
    this.size=result
  })
    
  
  }
      doadd(){
        this.checksubmit=true;
        this._variants.addsiz(this.category_size.value).subscribe((result)=>{
          if(result._id){
            this.size.push(result);
            document.getElementById('Closemodal').click();
          }
        })
        alert();
      }login
  ngOnInit() {
  }
  doedit(obj){
    alert('hello');
    console.log(obj);
  }

}
