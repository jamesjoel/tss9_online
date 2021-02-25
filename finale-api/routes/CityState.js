var routes = require("express").Router();
var cityCtrl = require("../controllers/CityStateController");

routes.get("/total", cityCtrl.total);


routes.get("/", cityCtrl.getall); // no para
routes.get("/:a", cityCtrl.getLimited); // only one para -- http://localhost:3000/api/citystate/100/
routes.get("/:a/:b", cityCtrl.getLimitedSkip); // 2 para -- http://localhost:3000/api/citystate/100/9


module.exports = routes;

