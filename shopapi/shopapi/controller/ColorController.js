ColorModel=require('../model/ColorModel');
exports.store=(req,res)=>{
  ColorModel.create(req.body,(err,result)=>{
  	res.send(result);
  })

}

exports.index=(req,res)=>{
	ColorModel.find({}).exec((err,result)=>{
		res.send(result);
	})
}