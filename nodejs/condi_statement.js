/*
        Condition Statements
    
    1. if()  .................... agar ye ho to ye karna

    2. if()..... else   .............. agar ye ho to ye karna aur agar ye na ho to ye karna

    3. if()......elseif()......elseif()......else ........... agar esa ho to ye karo, agar esa ho to ye karo, agar esa ho to ye karo, aagr esa ho to ye karo

    
    
    4. switch......case ---- agar esa ho to ye karo, agar esa ho to ye karo, agar esa ho to ye karo, aagr esa ho to ye karo



*/
/*
var a = 233;
var b = 5;

if(a % b == 1)
{
    console.log("reminder is 1");
}
else if(a % b ==2)
{
    console.log("reminder is not 2");
}
else if(a % b ==3)
{
    console.log("reminder is not 3");
}
else if(a % b ==4)
{
    
    console.log("reminder is not 4");
}
*/

/*
agar 
a = 1000, indore
a = 2000, mumbai
a = 3000, pune
a = 4000, ujjain
a = 5000, bhopal

no city

*/
// jab hume kisi single varibale ko multi values se equal compair then we can use swtich case.
var a = 'ankit';

switch(a){ // system take is values (3)

    case 'ankit' : console.log("indore"); // 
                break;

    case 'mohit' : console.log("mumbai"); // 
                break;

    case 'ishan' : console.log("pune"); // 
                break;

    case 'suraj' : console.log("ujjain"); // 
                break;

    case 'dev' : console.log("bhopal");
                break;

    default : console.log("no city");

}

/*
without loop

var a = 3;
var a = 7;
var a = 9;

var a = 12;

3
4
5
6
7   7
8   8
9   9   9   
10  10  10


no data found




*/