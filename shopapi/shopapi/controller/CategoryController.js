CategoryModel=require('../model/CategoryModel');

exports.index=(req,res)=>{
      CategoryModel.find({}).exec((err,result)=>{
      	res.send(result);
      });
}

exports.store=(req,res)=>{
	CategoryModel.create(req.body,(err,result)=>{
		console.log(result);
		res.send(result);
	});
}
exports.edit=(req,res)=>{
	console.log(req.params.id);
	CategoryModel.findOne({_id:req.params.id}).exec((err,result)=>{
		console.log(result);
		res.send(result);
	})
}
exports.update=(req,res)=>{
	id=req.params.id;
	delete req.body.id;
	CategoryModel.updateOne({_id:id},req.body,(err,result)=>{
     res.send(result);
	});
}
exports.delete=(req,res)=>{
	id=req.params.id;
	CategoryModel.remove({_id:id},(err,result)=>{
		console.log(result);
		res.send(result);
	})
}
