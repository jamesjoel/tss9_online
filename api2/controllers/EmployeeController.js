var EmplyeeModel = require("../models/EmployeeModel");
var mongodb = require("mongodb");
exports.getEmployee = (req, res)=>{
    EmplyeeModel.find({}, function(err, result){
        res.send(result);
    })
}

exports.addEmployee = (req, res)=>{
    delete req.body._id;
    EmplyeeModel.save(req.body, function(err, result){
        // res.send(result);
        res.send(result.ops[0]);
    })
}

exports.editEmployee = (req, res)=>{
    var id = req.params.id;
    delete req.body._id;
    EmplyeeModel.update({ _id : mongodb.ObjectId(id)}, req.body, function(err, result){
        res.send(result);
    })
    
}

exports.deleteEmployee = (req, res)=>{
    var id = req.params.id;

    EmplyeeModel.delete({ _id : mongodb.ObjectId(id)}, function(err, result){
        res.send(result);
    });
}