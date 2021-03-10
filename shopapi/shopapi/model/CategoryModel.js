var mongoose= require('mongoose');

CategorySchema=new mongoose.Schema({

	name:{
		type:String
	},
	meta_title:{
		type:String
	},
	meta_slug:{
		type:String
	}
});
module.exports=mongoose.model('Category',CategorySchema);