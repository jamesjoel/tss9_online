mongoose=require('mongoose');
mongooseSchema=new mongoose.Schema({
	name:{
		type:String
	},
	category:{
		type:String
	},
	meta_title:{
		type:String
	},
	image:{
		type:String
	}
})
module.exports=mongoose.model('Subcategory',mongooseSchema);