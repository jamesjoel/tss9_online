var ProductModel = require("../models/ProductModel");
var mongodb = require("mongodb");
exports.getall = (req, res)=>{
    ProductModel.find({}, function(err, result){
        res.send(result);
    })
}

exports.add = (req, res)=>{
    console.log("-----", req.body);
    
    delete req.body._id;
    ProductModel.add(req.body, function(err, result){
        // console.log(result);
        res.send(result.ops[0]);
    })
}

exports.update = (req, res)=>{
    console.log("----------------");
    var id = req.params.id;
    delete req.body._id;
    ProductModel.update({ _id : mongodb.ObjectId(id) }, req.body, function(err, result){
        // console.log("----", result);
        res.send(result.result);
    })
}


exports.delete = (req, res)=>{
    
    
    var id = req.params.id;
    ProductModel.delete({ _id : mongodb.ObjectId(id) },function(err, result){
        // console.log(result.result);
        res.send(result.result);
    })
}