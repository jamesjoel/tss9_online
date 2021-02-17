var routes = require("express").Router();
var AdminCtrl = require("../controllers/AdminController");
routes.post("/login", AdminCtrl.login);


module.exports = routes;
