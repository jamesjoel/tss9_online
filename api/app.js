var express = require("express");
var app = express();
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

var bodyParser = require("body-parser");

// localhost:3000/api/demo
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get("/api/student", (req, res)=>{
    
    MongoClient.connect(url, function(err, con){
        var db = con.db("tss9");
        db.collection('student').find().toArray(function(err, result){
            res.send(result);
        })
    })

});

app.post("/api/student", (req, res)=>{
    MongoClient.connect(url, function(err, con){
        var db = con.db("tss9");
        db.collection('student').insertOne(req.body, function(err, result){
            
            res.send(result.ops[0]);
        })
    })
})



app.listen(3000, ()=>{
    console.log("server running");
})