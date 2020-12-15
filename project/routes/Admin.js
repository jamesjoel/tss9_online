var routes = require("express").Router();
var AdminCtrl = require("../controllers/AdminController");

routes.get("/", AdminCtrl.index);
routes.get("/product", AdminCtrl.product);
routes.get("/category", AdminCtrl.category);
routes.post("/category", AdminCtrl.insert_category);

routes.get("/demo", AdminCtrl.insert_admin);

routes.get("/users", AdminCtrl.users);

module.exports = routes;
