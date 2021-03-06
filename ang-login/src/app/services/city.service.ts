import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private _http : HttpClient) { }

  getCityState(){
    return this._http.get<any>("http://localhost:3000/api/statecity");
  }
  
  getcity(state){
    return this._http.post<any>("http://localhost:3000/api/statecity", { state : state });

  }
}
