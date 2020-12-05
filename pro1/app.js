var express = require("express");
var app = express();

console.log("----------------- FIRST LINE");

app.listen(3000, function(){
    console.log("server running");
    console.log("----------------- SECOND SECOND");
});
