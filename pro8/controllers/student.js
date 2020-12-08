var express = require("express");
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


routes.get("/", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        // db.collection("student").find((err, result)=>{
        //     if(err){
        //         console.log("error in find", err);
        //         return;
        //     }
        //     console.log(result);
        // });

        db.collection('student').find().toArray((err, result)=>{
           if(err){
               console.log("table error-----", err);
               return;
           } 
            // console.log(result);
            var pagedata = { title : "Student", pagename : "student/index", result : result };
            res.render("layout", pagedata);
        });

    });



   
});
routes.get("/add", (req, res)=>{
    var pagedata = { title : "Student", pagename : "student/add" };
    res.render("layout", pagedata);
})


routes.post("/", (req, res)=>{
    // var data = [req.body];
    var data = req.body;
    // http://firebase.mongodb.com?username=rohit&password=123
    MongoClient.connect(url, (err, con)=>{
        if(err){
            console.log("connection error", err);
            return;
        }
        // select or use database
        var db = con.db("tss9");
        // db.employee.insert([{ name : "rohit "}, { name : "james"}])

        db.collection("student").insertOne(data, ()=>{
            res.redirect("/");
        });
        
    });
});
// localhost:3000/student/delete
routes.get("/delete/:a", (req, res)=>{
    var z = req.params.a;
    
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").removeMany({ name : z}, ()=>{
            res.redirect("/student");
        });
        
    })


    // console.log(req.params);
    // console.log("this is delete student");
});




/*
    res.render()
    res.sendFile()
    res.send()
    res.redirect()

*/

module.exports = routes;