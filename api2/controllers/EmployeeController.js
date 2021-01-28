var EmplyeeModel = require("../models/EmployeeModel");
exports.getEmployee = (req, res)=>{
    EmplyeeModel.find({}, function(err, result){
        res.send(result);
    })
}

exports.addEmployee = (req, res)=>{
    EmplyeeModel.save(req.body, function(err, result){
        res.send(result.ops[0]);
    })
}