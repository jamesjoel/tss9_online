
BrandModel=require('../model/BrandModel');

exports.index=(req,res)=>{
	BrandModel.find({}).exec((err,result)=>{
		res.send(result);
	})
}

exports.store=(req,res)=>{
	delete req.body._id;
	BrandModel.create(req.body,(err,result)=>{
		res.send(result);
		console.log(result);
	})
}

exports.update=(req,res)=>{
	//var mongodb=require('mongodb');
	var id=req.params.id;
	delete req.body._id;
//	var a = ObjectId(id);
	BrandModel.updateOne({_id:id},req.body,(err,result)=>{
		res.send(result);
	})
console.log(req.body);	
}

exports.delete=(req,res)=>{
  var id= req.params.id;
  console.log(id);
  BrandModel.remove({_id:id},(err,result)=>{
  	console.log(result);
  	res.send(result);
  })
}