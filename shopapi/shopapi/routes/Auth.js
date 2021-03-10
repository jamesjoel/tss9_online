
var routes =require('express').Router();

var AuthController=require('../controller/AuthController');

routes.post('/login',AuthController.login);

routes.post('/register',AuthController.register);

module.exports=routes;