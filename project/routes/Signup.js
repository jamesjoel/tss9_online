var routes = require('express').Router();
var SignupCtrl = require("../controllers/SignupController");

routes.get("/", SignupCtrl.index);

module.exports = routes;