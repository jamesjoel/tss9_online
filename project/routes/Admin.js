var routes = require("express").Router();
var AdminCtrl = require("../controllers/AdminController");

routes.get("/", AdminCtrl.index);
routes.get("/product", AdminCtrl.product);
routes.get("/category", AdminCtrl.category);
routes.get("/users", AdminCtrl.users);

module.exports = routes;
