mongoose=require('mongoose');
ColorSchema=new mongoose.Schema({
	color_code:
	{
		type:String
	},
	color_name:
	{
		type:String
	}
})
module.exports=mongoose.model('color',ColorSchema);