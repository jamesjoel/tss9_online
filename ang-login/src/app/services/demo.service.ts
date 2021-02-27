import { Injectable } from '@angular/core';
import  { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  a = new BehaviorSubject(0);
  
  constructor() { }

  updateA(x){
    this.a.next(x);
  }
}
