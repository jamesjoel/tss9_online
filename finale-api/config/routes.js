var routes = require("express").Router();
var jwt = require("jsonwebtoken");
var config = require("../config/config");

routes.use("/api/admin", require("../routes/Admin"));
routes.use("/api/category", require("../routes/Category"));
routes.use("/api/product", require("../routes/Product"));
routes.use("/api/citystate", require("../routes/CityState"));



module.exports = routes;

/*




*/