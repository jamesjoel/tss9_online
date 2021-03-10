import { FormGroup } from '@angular/forms';

export function Cheaknum(abc){
    return function (form :FormGroup){
        let x=form.controls[abc];
        if(x.errors && ! x.errors.numerr  && ! x.errors.lenerr){            
            return;
            alert();
        }
        if(!isNaN(x.value)){
           
            x.setErrors({numerr:true});
        }
        else{
            if(x.value.length > 2){
                x.setErrors({lenerr:true});
            }
            else{
                   x.setErrors(null);
            }
        }
    }
}