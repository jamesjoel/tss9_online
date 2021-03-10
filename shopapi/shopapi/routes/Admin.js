
var routes=require('express').Router(); 
var jwt=require('jsonwebtoken');
BrandController = require('../controller/BrandController');

CategoryController = require('../controller/CategoryController');

SubcategoryController = require('../controller/SubcategoryController');

ProfileController = require('../controller/ProfileController');

ColorController = require('../controller/ColorController');

SizeController = require('../controller/SizeController');

ProductController = require('../controller/ProductController');

routes.get('/brand',BrandController.index);

routes.post('/brand',BrandController.store);

routes.put('/brand/:id',BrandController.update);

routes.put('/profile/:id',ProfileController.update);

routes.delete('/brand/:id',BrandController.delete);

routes.get('/category',CategoryController.index);

routes.get('/category/:id',CategoryController.edit);

routes.put('/category/:id',CategoryController.update);

routes.delete('/category/:id',CategoryController.delete);

routes.post('/category',CategoryController.store);

routes.post('/subcategory',SubcategoryController.store);

routes.get('/subcategory',SubcategoryController.index);

routes.get('/subcategory/:a',SubcategoryController.limiteddata);

routes.get('/subcategory/:a/:b',SubcategoryController.skipdata);

routes.get('/subcategorytotal',SubcategoryController.totalrow);

routes.delete('/subcategory/:id',SubcategoryController.delete);

routes.get('/subcategory/:id',SubcategoryController.edits);

routes.get('/sub',SubcategoryController.index);

routes.get('/profile',backdoor,ProfileController.profile);

routes.post('/color',ColorController.store);

routes.get('/color',ColorController.index);

routes.post('/size',SizeController.store);

routes.get('/size',SizeController.index);

routes.post('/product',ProductController.store);
 
routes.get('/product',backdoor,ProductController.get);

routes.delete('/product',backdoor,ProductController.delete); 	

function backdoor(req,res,next){
	if(! req.headers.authorization || req.headers.authorization==""){
		res.status(401).send('something went wrong');
	}
	else{
		var token= req.headers.authorization;
		var cheak = jwt.verify(token,'hello');
		if(!cheak){
			res.status(400).send('something went wrong');
		}
		else
		{
			req.userid=cheak.userid;
			next();
		}
	}
}

module.exports=routes;