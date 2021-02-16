var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var MongoClient = require("mongodb").MongoClient;
var mongodb = require("mongodb");
var url = "mongodb://localhost:27017";
var jwt = require("jsonwebtoken");
var upload = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(upload());

// localhost:3000
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});


app.get("/api/employee", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("employee").find().toArray((err, result)=>{
            res.send(result);
        })
    })
});

app.get("/api/employee/:id", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("employee").find({ _id : mongodb.ObjectId(req.params.id) }).toArray((err, result)=>{
            res.send(result[0]);
        })
    })
})







app.post("/api/upload", (req, res)=>{
    console.log(req.files);
    // console.log(req.body.formobj);
    var form = req.body.formobj;
    console.log(JSON.parse(form));
    var file = req.files.myfile;
    file.mv(__dirname+"/assets/images/"+file.name, function(err){
        var filepath = "http://localhost:3000/images/"+file.name;
        res.send({ filepath : filepath });
    })
})
// <img src="/images/1.jpg"

app.get("/api/statecity", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("state").distinct("state", function(err, result){
            // console.log(result);
            res.send(result);
        })
    })
});

app.post("/api/statecity", (req, res)=>{
    // console.log(req.body);
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("state").find({ state : req.body.state }).toArray(function(err, result){
            res.send(result);
        })
    })
})




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