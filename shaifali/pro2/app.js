var express = require("express");
var app = express();

// now we add template engine by
app.set("view engine", "ejs");

app.get("/", function(req, res){
    var a = "rohit verma";
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
});

app.listen("3000", function(){
    console.log("server running");
});