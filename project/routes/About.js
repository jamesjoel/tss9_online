var routes = require('express').Router();
var AboutCtrl = require("../controllers/AboutController");

// localhost:3000/about
routes.get("/", AboutCtrl.index);

// localhost:3000/about/info
routes.get("/info", AboutCtrl.info);

// localhost:3000/about/detail
routes.get("/detail", AboutCtrl.detail);


module.exports = routes;