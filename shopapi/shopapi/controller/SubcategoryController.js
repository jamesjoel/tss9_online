
SubcategoryModel=require('../model/SubcategoryModel');
var path=require('path');
exports.index=(req,res)=>{
   SubcategoryModel.find({}).exec((err,result)=>{
   	res.send(result);
   })
}

exports.limiteddata=(req,res)=>{
	console.log(req.params);
	a=parseInt(req.params.a);
   SubcategoryModel.find({}).limit(a).exec((err,result)=>{
   	res.send(result);
   })
}
exports.skipdata=(req,res)=>{
	a=parseInt(req.params.a);
	b=parseInt(req.params.b);
	c=(b-1)*a;
	SubcategoryModel.find({}).skip(c).limit(a).exec((err,result)=>{
		res.send(result);
		console.log('***********',c);
		console.log('-----------',result);
	});
}
exports.totalrow=(req,res)=>{
	SubcategoryModel.count({}).exec((err,result)=>{
	res.send({total:result});	
	})
	
}
exports.store=(req,res)=>{
	var file =req.files.myfile;
	file.mv(path.resolve()+'/assets/images/subcategory/'+file.name,function(err){
		req.body.image=file.name;
		SubcategoryModel.create(req.body,(err,result)=>{
			console.log(path.resolve()+'/assets/images/subcategory/'+file.name);
		res.send(result);
		console.log(result);
	})
	})
}
exports.delete=(req,res)=>{
	console.log('heelo');
	console.log(req.params);
	id=req.params.id;
	SubcategoryModel.deleteOne({_id:id}).exec((err,result)=>{
      console.log(result);
      res.send(result);
	})
}

exports.edits=(req,res)=>{

	id=req.params.id
	console.log(id);
	SubcategoryModel.find({category:id}).exec((err,result)=>{
		console.log(result);
		res.send(result);
	})
}