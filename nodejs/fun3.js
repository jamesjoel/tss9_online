function demo(a=10, b=10, c=2) // parameter
{
    var x = a*b;
    var y = x/c;
    
    var arr = [x, y];
    
    return arr; // returning value of y
    
}

var ans = demo(20, 20, 10);
console.log(ans);