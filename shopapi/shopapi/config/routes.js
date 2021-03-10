
var routes= require('express').Router();

var Admin = require('../routes/Admin');

var Auth = require('../routes/Auth');

routes.use('/auth',Auth);

routes.use('/admin',Admin);

module.exports=routes;
