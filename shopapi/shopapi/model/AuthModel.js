mongoose=require('mongoose');
UsersSchema=new mongoose.Schema({

	firstname:
	{
		type:String
	},
	lastname:
	{
		type:String
	},
	email:
	{
		type:String

	},
	role:
	{
		type:String
	},
	password:
	{
		type:String
	}

})
module.exports=mongoose.model('User',UsersSchema);