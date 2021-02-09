import { FormGroup } from '@angular/forms';

export function MachPass(pass, repass){
    return function(myForm : FormGroup){
        let x = myForm.controls[pass]; // password
        let y = myForm.controls[repass]; // re_pass
        if(y.errors && !y.errors.machErr)
        {
            return;
        }
        if(x.value != y.value)
        {
            y.setErrors({ machErr : true });
        }
        else{
            y.setErrors(null);
        }
    }
}

export function chekNum(con){
    return function (xyz : FormGroup)
    {
        let a = xyz.controls[con];

        if(a.errors && !a.errors.contacterr && !a.errors.lengtherr)
        {
            return;
        }

        if(isNaN(a.value))
        {
            a.setErrors({ contacterr : true });
        }
        else{
            if(a.value.length > 10)
            {
                a.setErrors({ lengtherr : true });
            }
            else{
                a.setErrors(null);

            }
        }
    }
}

export function imageCheck(img){
    return function (myForm : FormGroup){
        let a = myForm.controls[img];
        let name = a.value;
        let arr = name.split(".");
        let ext = arr[arr.length-1];
        if(a.errors && ! a.errors.imgerr){
            return;
        }

        if(ext =="jpg" || ext =="jpeg")
        {
            
            a.setErrors(null);
        }
        else
        {
            a.setErrors({ imgerr : true });
        }
    }
}
// isNaN()  --- is Not A Number

// if(isNaN(x))
