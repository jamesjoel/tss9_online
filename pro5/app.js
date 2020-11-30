var express = require('express');
var app = express();

app.set('view engine', "ejs");
//  another template engines like 'handlebar', 'jade', 'dot', 'pug'
// all template file (ejs) should be inside of 'views' folder

//now create our Routes/URL
app.get("/", function(req, res){
    var a = "Mr. rohit verma";
    // whenever you pass data from .js to .ejs then you have to create a object
    var pageData = { name : a, address : "M. G. Road", title : "Home Page" };

    res.render('home', pageData);
   
});
app.get("/about", function(req, res){
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "james",
            age : 22,
            city : "ujjain"
        },
        {
            name : "vijay",
            age : 25,
            city : "mumbai"
        }
    ];




    var pageData = { title : "About Page", data : data };
    res.render('about', pageData);
    
});
app.get("/contact", function(req, res){
    var cities = ["indore", "mumbai", "pune", "delhi", "bhopal"];


   

    var pageData = { title : "Contact Page", cities : cities};
    res.render('contact', pageData);
    
});





app.listen(3000, function(){
    console.log("server running");
});

/*
    res.send() --------- Only data send

    res.sendFile() ------ Only File send

    res.render() ------ data and file both

    res.redirect() ----- redirect to another path




*/