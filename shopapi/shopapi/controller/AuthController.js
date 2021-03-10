
AuthModel=require('../model/AuthModel');
var sha1=require('sha1');
var jwt=require('jsonwebtoken');

exports.login=(req,res)=>{
   password=sha1(req.body.password);
  email= req.body.email
	console.log(req.body);
	AuthModel.find({email:email}).exec((err,result)=>{
		if(result.length == 1)
		{
			if(result[0].password==password){		       		
		       	token=jwt.sign({'userid':result[0]._id},'hello',{expiresIn:'24h'});
		       	res.status(200).json({success:true,token});

			}
			else{

			      res.status(401).json({success:false,type:2});	
			}
		
		}
		else
		{
			res.status(401).json({success:false,type:1});

		}
	})

}

exports.register=(req,res)=>{
	console.log('hello');
	console.log(req.body);
	delete req.body.confirm_password;
	req.body.password=sha1(req.body.password);
//	req.body.role='admin';
	AuthModel.create(req.body,(err,result)=>{
		res.send(result);
		console.log(result);
	})
}