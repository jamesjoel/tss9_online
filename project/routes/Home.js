var routes = require('express').Router();
var HomeCtrl = require("../controllers/HomeController");

routes.get("/", HomeCtrl.index);
routes.get("/category/:id", HomeCtrl.category);

module.exports = routes;