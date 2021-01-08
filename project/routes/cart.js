var routes = require('express').Router();
var CartCtrl = require("../controllers/CartController");

// localhost:3000/about
routes.get("/addtocart/:id", CartCtrl.add);
routes.get("/mycart", CartCtrl.mycart);
routes.get("/clearcart", CartCtrl.clearcart);
routes.get("/remove/:id", CartCtrl.remove);


module.exports = routes;