var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");
// setting express env
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
// connect database
require("./config/database");


// use middleware (modules)
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(routes);

var port = 3000;

app.listen(port, ()=>{
    console.log("server running with port : ",port);
});
