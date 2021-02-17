var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");
var fileupload = require("express-fileupload");
var cors = require("cors");


app.use(express.static(__dirname+"/assets"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(fileupload());


app.use(routes);

var port = 3000;

app.listen(port, ()=>{
    console.log("server running with port : ",port);
});
