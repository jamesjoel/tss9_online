mongoose=require('mongoose');
mongooseSchema=new mongoose.Schema({
	sizes:{
		type:String
	},
	name:{
		type:String
	}
})
	module.exports=mongoose.model('size',mongooseSchema);