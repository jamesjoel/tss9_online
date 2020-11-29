// download express module and require
var express = require("express");

// call express default function
var app = express();

// now create our url/routes

app.get("/about", function(req, res){ // localhost:3000/about
    
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){ // localhost:3000/contact
    //res.send("this is contact page");
    res.sendFile(__dirname+"/contact.html");
});

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html")
})




// create our local server with 3000 port
app.listen(3000, function(){
    console.log("server running");
});
