import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  city=[];
  total;
  recPerPage = 100;
  totalPages;
  constructor(private _page : PageService) {
    this._page.getAll(this.recPerPage).subscribe((result)=>{
      this.city = result;
      // console.log(this.city);
    })
    this._page.totalRow().subscribe((result)=>{
      console.log(result);
      this.total = result.a;
      this.totalPages = Math.ceil(this.total/this.recPerPage);

    })
   }

  ngOnInit() {
  }
  pageCall(x){
    alert(x);
  }

}
