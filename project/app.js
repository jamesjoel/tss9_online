var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");
var session = require("express-session");
var flash = require("express-flash");
var nochahe = require("nocache");
var fileupload = require("express-fileupload");
var cookieParser = require("cookie-parser");

// setting express env
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
// connect database

var CategoryModel = require("./models/CategoryModel");


require("./config/database");

app.use(session({ secret : "the stepping stone"}));
// use middleware (modules)
app.use(cookieParser());
app.use(nochahe());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(fileupload());
app.use(flash());

app.use(function(req, res, next){
    // what ever we set in res.locals its directly avalable on view (all views)
    CategoryModel.find({}).exec(function(err, category){
        if(req.cookies.cart) // 1225#9645#8745
        {
            var cartstr = req.cookies.cart;
            var cartarr = cartstr.split("#"); // [1225, 9645, 8745]
            var total = cartarr.length; // 3
        }
        else
        {
            var total = 0;
        }
        res.locals.total = total;
        res.locals.session = req.session;
        res.locals.cate_arr = category;
        next();
    });

});



app.use(routes);

var port = 3000;

app.listen(port, ()=>{
    console.log("server running with port : ",port);
});
