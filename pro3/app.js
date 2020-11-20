var express = require("express");
var app = express();
// __dirname predefined variable for giving us dir path

/*
all static files like
    .css
    .js
    all images



    the express.static() function serve all static to the client.
*/

app.use(express.static(__dirname+"/node_modules"));



app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html");
});
app.get("/about", function(req, res){
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", function(req, res){
    res.sendFile(__dirname+"/contact.html");
});


app.listen(3000, function(){
    // console.log("hello");
    console.log(__dirname+"/node_modules");
    console.log("server running");
})