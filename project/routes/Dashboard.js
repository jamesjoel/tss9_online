var routes = require('express').Router();
var DashboardCtrl = require("../controllers/DashboardController");

routes.get("/", DashboardCtrl.index);


module.exports = routes;