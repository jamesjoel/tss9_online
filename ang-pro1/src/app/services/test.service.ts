import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }


  abc(a, b){
    let c = a+b;
    console.log(c);
  }
}
