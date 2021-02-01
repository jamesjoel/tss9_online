var routes = require("express").Router();
var SignupCtrl = require("../controllers/SignupController");

routes.post("/", SignupCtrl.index);


module.exports = routes;