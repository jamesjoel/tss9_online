
mongoose=require('mongoose');
BrandSchema=new mongoose.Schema({
   name:{
   type:String
},
	meta_title:{
	type:String
},
	slug:{
		type:String
}
})
module.exports=mongoose.model('Brand',BrandSchema);