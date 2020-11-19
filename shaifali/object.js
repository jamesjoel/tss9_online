/*
    an object can multipal values in single varialbe but every values has own property.


*/
var color = ["green", "yellow", "red"];

var data = { a : "green", b : "yellow", c : "red"};

data.a = "blue";
console.log(data);
