var express = require("express");
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;


routes.get("/", (req, res)=>{
    var pagedata = { title : "Student", pagename : "student/index" };
    res.render("layout", pagedata);
});

routes.post("/", (req, res)=>{
    var data = [req.body];
    // http://firebase.mongodb.com?username=rohit&password=123
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log("connection error", err);
            return;
        }
        // select or use database
        var db = con.db("tss9");
        // db.employee.insert([{ name : "rohit "}, { name : "james"}])

        db.collection("student").insertMany(data, ()=>{
            res.redirect("/");
        });
        
    });
});
/*
    res.render()
    res.sendFile()
    res.send()
    res.redirect()

*/

module.exports = routes;