var express = require("express");
var app = express();
var TeacherModel = require("./models/TeacherModel");
var database = require("./database/connect");
app.use(express.static(__dirname+"/node_modules"));



app.get("/", function(req, res){
    TeacherModel.create({ name : "rohit", age : 25, city : "indore"}, (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        console.log('hello world');

    })
});


app.listen(3000, function(){
    // console.log("hello");
    console.log(__dirname+"/node_modules");
    console.log("server running");
})