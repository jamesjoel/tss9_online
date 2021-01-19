var routes = require("express").Router();

var Teacher = require("../model/teacherModel");

routes.get("/", (req, res)=>{
    Teacher.find({}).exec((err, result)=>{
        res.send(result);
    });
    
});

routes.post("/", (req, res)=>{
    Teacher.create(req.body, function(err, result){
        res.send({ msg : "Data Saved"});
    });
});

module.exports = routes;