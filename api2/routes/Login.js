var routes = require("express").Router();
var LoginCtrl = require("../controllers/LoginController");

routes.post("/", LoginCtrl.index);


module.exports = routes;