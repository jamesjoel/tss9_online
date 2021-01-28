var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.use(cors());

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(routes);

var port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log("api server runnin on port : ", port);
});


//localhost:3000/
//test.com/