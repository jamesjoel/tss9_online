var routes = require("express").Router();
var ProductCtrl = require("../controllers/ProductController");
var config = require("../config/config");
//localhost:3000/api/category

routes.get("/", ProductCtrl.getall);

routes.post("/", config.backdoor_admin, ProductCtrl.add);
routes.put("/:id", config.backdoor_admin, ProductCtrl.update);
routes.delete("/:id", config.backdoor_admin, ProductCtrl.delete);


module.exports = routes;
