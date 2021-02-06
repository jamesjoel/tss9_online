import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Mydir]'
})
export class MydirDirective {

  constructor(private _ele : ElementRef) {
    // console.log(this._ele);
    this._ele.nativeElement.style.backgroundColor = "red";
    this._ele.nativeElement.style.fontSize = "35px";
   }

   @HostListener('click') demo(){
    //  console.log("------------------");
    //  alert();
    this._ele.nativeElement.style.backgroundColor = "green";
   }
   @HostListener('mouseout') demo2(){
     this._ele.nativeElement.innerHTML="go back";
   }

}

// <p MyDir><p>
