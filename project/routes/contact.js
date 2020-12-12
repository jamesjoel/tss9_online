var routes = require('express').Router();
var ContactCtrl = require("../controllers/ContactController");

routes.get("/", ContactCtrl.hello);
routes.get("/moreinfo", ContactCtrl.test);

module.exports = routes;