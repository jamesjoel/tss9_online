var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");
var session = require("express-session");
var flash = require("express-flash");
var nochahe = require("nocache");
// setting express env
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
// connect database
require("./config/database");

app.use(session({ secret : "the stepping stone"}));
// use middleware (modules)
app.use(nochahe());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(flash());

app.use(function(req, res, next){
    // what ever we set in res.locals its directly avalable on view (all views)
    res.locals.session = req.session;
    next();
});



app.use(routes);

var port = 3000;

app.listen(port, ()=>{
    console.log("server running with port : ",port);
});
