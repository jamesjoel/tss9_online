const routes = require("express").Router();
var MongoClient = require("mongodb").MongoClient;

var StudentModel = require("../models/StudentModel");
// Controller
// localhost:3000/student/list
routes.get("/list", (req, res)=>{
    StudentModel.find(function(err, result){
        res.send(result);
    });
});




/*
routes.post("/", (req, res)=>{
    StudentModel.save(req.body, function(err, result){

    });
});

routes.get("/delete/:id", (req, res)=>{
    var id = req.params.id;
    StudentModel.delete({ _id : id }, function(err, result){

    })
});



*/



module.exports = routes;