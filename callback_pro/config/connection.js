var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

module.exports = function(cb){
    MongoClient.connect(url, cb);
}


/*
studentModel.js

var connection = require("connection");
connection(function(err, con){

});







*/