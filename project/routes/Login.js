var routes = require('express').Router();
var LoginCtrl = require("../controllers/LoginController");

// localhost:3000/login
routes.get("/", LoginCtrl.index);
// localhost:3000/login/demo
routes.post("/", LoginCtrl.auth);

module.exports = routes;