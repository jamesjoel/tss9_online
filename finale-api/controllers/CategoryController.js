var CategoryModel = require("../models/CategoryModel");
var mongodb = require("mongodb");
exports.getall = (req, res)=>{
    CategoryModel.find({}, function(err, result){
        res.send(result);
    })
}

exports.add = (req, res)=>{
    
    CategoryModel.add(req.body, function(err, result){
        res.send(result);
    })
}

exports.update = (req, res)=>{
    
    var id = req.params.id;
    delete req.body._id;
    CategoryModel.update({ _id : mongodb.ObjectId(id) }, req.body, function(err, result){
        res.send(result);
    })
}


exports.delete = (req, res)=>{
    
    
    var id = req.params.id;
    CategoryModel.delete({ _id : mongodb.ObjectId(id) },function(err, result){
        res.send(result);
    })
}