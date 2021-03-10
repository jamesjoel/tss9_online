import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  demo:FormGroup;
  constructor(private _http : HttpClient, private _fb : FormBuilder) {
    this.demo = this._fb.group({
      name : [""],
      image : [""]
    })
   }

  ngOnInit() {
  }
  submit(obj){
    // var arr = [];
    var form = new FormData();
    for(var i=0; i<obj.files.length; i++)
    {
      form.append("images[]", obj.files[i]);
     }
    // console.log(arr);
    
    
    
    form.append("otherdata", this.demo.value);

    this._http.post<any>("http://localhost:3000/admin/product", form).subscribe((result)=>{
        console.log(result);
    })


  }

}
