SizeModel=require('../model/SizeModel');
exports.store=(req,res)=>{
   SizeModel.create(req.body,(err,result)=>{
   	console.log(result);
   	res.send(result);
   })
}

exports.index=(req,res)=>{
	SizeModel.find({}).exec((err,result)=>{
        res.send(result);
	});
}