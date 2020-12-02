var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(bodyParser());
var logo = "The Stepping";

var arr = ["/about", "/help", "/contact"];

var arr2 = ["/", "/login", "/signup"];
app.use(arr, (req, res, next)=>{
    // req.logo = logo;
    console.log("--------------welcome -------------");
    next();
});

app.use(arr2, (req, res, next)=>{
    // req.logo = logo;
    console.log("--------------hello world -------------");
    next();
});



/*
    app.get("url", (req, res)=>{

    })

*/


app.use(routes);

// .use is a middleware



app.listen(3000, ()=>{
    console.log("server running");
});