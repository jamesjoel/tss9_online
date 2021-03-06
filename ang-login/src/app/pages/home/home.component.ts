import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import  { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http : HttpClient, private _demo : DemoService) {
    this._demo.updateA(500);
   }

  filearr=[];
  user={
    name : "rohit",
    age : 25
  };
  update(){
    this._demo.updateA(5);
  }

  ngOnInit() {
  }

  upload(x){
    console.log(x.files[0]);
    let filedata = x.files[0];
    

    let form = new FormData();
    form.append("myfile", filedata); // req.files
    form.append("formobj", JSON.stringify(this.user)); // req.body
    // form.append("formobj", JSON.stringify(this.user.value)); // req.body
   // form.append("age", "25"); // req.body


    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe((result)=>{
      //console.log(result);
      this.filearr.push(result);
      // { filepath : "http://localhost:3000/images/"}
    })

  }

}

//  <form enctype = "multipart/form-data">
