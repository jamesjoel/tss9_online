
mongoose=require('mongoose');
MongooseSchema=new mongoose.Schema({
	name:
	{
		type:String

	},
	
	category_id:
	{
		type:String
	},
	subcategory_id:
	{
		type:String
	},
	brand_id:
	{
		type:String

	},
	unit:
	{
		type:String
	},
	min_qty:
	{
		type:String
	},
	color:
	{
		type:String
	},
	size:
	{
		type:String
	},
	unit_price:
	{
		type:String
	},
	purchase_price:
	{
		type:String
	},
	tax:
	{
		type:String
	},
	tax_type:
	{
		type:String
	},
	discount:
	{
		type:String
	},
	discount_type:
	{
		type:String
	},
	banner:
	{ 
		type:String
	},
	icon:
	{
		type:String
	},
	added_by:
	{
		type:String
	}
});
module.exports=mongoose.model('product',MongooseSchema);