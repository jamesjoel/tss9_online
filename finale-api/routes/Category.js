var routes = require("express").Router();
var CategoryCtrl = require("../controllers/CategoryController");
var config = require("../config/config");
//localhost:3000/api/category

routes.get("/", CategoryCtrl.getall);

routes.post("/", config.backdoor_admin, CategoryCtrl.add);
routes.put("/:id", config.backdoor_admin, CategoryCtrl.update);
routes.delete("/:id", config.backdoor_admin, CategoryCtrl.delete);


module.exports = routes;
