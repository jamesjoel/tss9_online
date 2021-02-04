var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var url = "mongodb://localhost:27017";
var jwt = require("jsonwebtoken");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.post("/api/login", (req, res)=>{
  
    MongoClient.connect(url, function(err, con){
        var db = con.db("tss9");
        db.collection("users").find({ username : req.body.username }).toArray(function(err, result){
            // console.log(result);
            if(result.length == 1)
            {
                if(result[0].password == req.body.password)
                {
                    var token = jwt.sign({ userid : result[0]._id }, "hello", { expiresIn : '24h'});
                    res.status(200).json({ success : true, token });
                }
                else
                {
                    res.status(401).json({ success : false, type : 2 });

                }
            }
            else
            {
                res.status(401).json({ success : false, type : 1 });

            }
        })
    });
});

app.get("/api/user", backdoor, (req, res)=>{
    // console.log(req.userid);
    var id = req.userid;
    MongoClient.connect(url, function(err, con){
        var db = con.db("tss9");
        db.collection("users").find({ _id : mongodb.ObjectId(id)}).toArray(function(err, result){
            res.send(result[0]);
        });
    })
});



function backdoor(req, res, next){
    if(! req.headers.authorization || req.headers.authorization == "")
    {
        return res.status(401).send("Somthing went wrong !");
    }
    else{
        var token = req.headers.authorization;
        var check = jwt.verify(token, "hello");
        if(! check)
        {
            return res.status(401).send("Somthing went wrong !");
        }
        req.userid = check.userid;
        next();
    }
}




app.listen(3000, ()=>{
    console.log("server running");
})