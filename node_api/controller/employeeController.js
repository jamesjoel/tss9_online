var routes = require("express").Router();
var Employee = require("../model/employeeModel");

// localhost:3000/api/employee
routes.get("/", (req, res)=>{
    Employee.search({}, function(err, result){
        res.send(result);
    });
});

routes.post("/", (req, res)=>{
    var obj = req.body;
    console.log(obj);
    Employee.save(obj, function(err, result){
        res.send({ msg : "Data Saved"});
    });
});

module.exports = routes;