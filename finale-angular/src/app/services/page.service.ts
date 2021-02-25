import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private _http : HttpClient) { }

  getAll(recPerPage){
    return this._http.get<any>("http://localhost:3000/api/citystate/"+recPerPage);
  }
  totalRow(){
    
    return this._http.get<any>("http://localhost:3000/api/citystate/total");
  }
  getLimitSkip(recPerPage, skip){
    
    return this._http.get<any>("http://localhost:3000/api/citystate/"+recPerPage+"/"+skip);
  }
}
