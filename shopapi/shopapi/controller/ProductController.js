
ProductModel=require('../model/ProductModel');
var path=require('path');
exports.store=(req,res)=>{
	console.log("helllooooooooo");
	console.log("-----------", req.body.otherdata);
	console.log("**************", req.files);
// 	form=JSON.parse(req.body.object);
// 	var file =req.files.sfiledata;

// 	file.mv(path.resolve()+'/assets/images/product/'+file.name,function(err){
//       delete form.product_img;
//       delete form.thumbnail_img;
// 		form.banner=file.name;
// 		form.icon=file.name;
// 	//	console.log(form);
// 	ProductModel.create(form,(result,err)=>{
// 		res.send(result);		
// 	});
// });
}
exports.get=(req,res)=>{
	ProductModel.find({}).exec((err,result)=>{
		console.log(result);
        res.send(result);
	});
}
exports.delete=(req,res)=>{
	ProductModel.remove({_id:req.params.id},(err,result)=>{
		console.log(result);
		res.send(result);
	})
}