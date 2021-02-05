import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(x, y) {
    if(x<=25){
      let z = y * 5 /100;
      return y-z;
    }
    if(x>25){
      
      let z = y * 10 /100;
      return y-z;
    }
  }

}
