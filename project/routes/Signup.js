var routes = require('express').Router();
var SignupCtrl = require("../controllers/SignupController");

routes.get("/", SignupCtrl.index);
routes.post("/", SignupCtrl.save);

module.exports = routes;