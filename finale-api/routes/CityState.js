var routes = require("express").Router();
var cityCtrl = require("../controllers/CityStateController");

routes.get("/", cityCtrl.getall);
routes.get("/total", cityCtrl.total);
routes.get("/:a", cityCtrl.getLimited);


module.exports = routes;

