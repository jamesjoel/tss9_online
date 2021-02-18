var routes = require("express").Router();
var jwt = require("jsonwebtoken");
var config = require("../config/config");

routes.use("/api/admin", require("../routes/Admin"));
routes.use("/api/category", require("../routes/Category"));




module.exports = routes;

/*




*/