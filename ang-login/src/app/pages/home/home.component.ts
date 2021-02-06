import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _http : HttpClient) { }

  filearr=[
    {
      filepath : "http://localhost:3000/img/banner/banner-1.jpg"
    }
  ];

  ngOnInit() {
  }

  upload(x){
    // console.log(x.files[0]);
    let filedata = x.files[0];

    let form = new FormData();
    form.append("myfile", filedata);

    this._http.post<any>("http://localhost:3000/api/upload", form).subscribe((result)=>{
      console.log(result);
      this.filearr.push(result);
    })

  }

}

//  <form enctype = "multipart/form-data">
