const routes = require("express").Router();
var MongoClient = require("mongodb").MongoClient;

// localhost:3000/student/list
routes.get("/list", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

module.exports = routes;