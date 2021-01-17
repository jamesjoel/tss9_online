var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

app.set("view engine", "ejs");

// localhost:3000/
app.get("/", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("cricket").find({}).toArray((err, result)=>{
            
            res.render("index", { result : result[0]});

        });
    });
});

app.get("/admin", (req, res)=>{
    // res.sendFile(__dirname+"/admin.html");
    res.render("admin");
});

var count=0;

var run = 0;
var wicket = 0;
io.on('connection', (socket)=>{
    /*count++;
    console.log("total user is ", count);

    socket.on("disconnect", ()=>{
        count--;
        console.log("the user is disconnected, total user is ", count);
    });
    */

    socket.on("crickinfo", function(data){
        // console.log(data);
        MongoClient.connect(url, (err, con)=>{
            var db = con.db("tss9");
            db.collection("cricket").updateMany({}, { $set : { run : data.r, wicket : data.w }}, (err, result)=>{
                io.emit("score", data);
            })
        })        
    })

});


http.listen(3000, ()=>{
    console.log('server running');
})