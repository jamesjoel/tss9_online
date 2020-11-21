var express = require("express");
var app = express();

// setting the application template engine langulage
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/about", function(req, res){

    var a = "rohit";
    
    var obj = { name1 : a, name2 : "nitin" };

    res.render("about", obj);
})



app.listen(3000, function(){
    console.log("server running");
})