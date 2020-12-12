var routes = require('express').Router();
var HomeCtrl = require("../controllers/HomeController");

routes.get("/", HomeCtrl.index);

module.exports = routes;