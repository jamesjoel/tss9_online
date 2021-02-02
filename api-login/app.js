var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

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
                if(result[0].password == sha1(req.body.password))
                {
                    res.status(200).json({ success : true });
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



app.listen(3000, ()=>{
    console.log("server running");
})