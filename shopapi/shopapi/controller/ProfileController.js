
AuthModel= require('../model/AuthModel');
exports.profile=(req,res)=>{
	id=req.userid;
	console.log('hello');
	console.log(id);
	AuthModel.findOne({_id:id}).exec((err,result)=>{
		console.log(result);
		res.send(result);

	});
}
exports.update=(req,res)=>{
	//var mongodb=require('mongodb');
	var id=req.params.id;
	delete req.body._id;
	AuthModel.updateOne({_id:id},req.body,(err,result)=>{
		console.log(result);
		res.send(result);
	})
}