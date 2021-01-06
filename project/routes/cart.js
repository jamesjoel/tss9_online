var routes = require('express').Router();
var CartCtrl = require("../controllers/CartController");

// localhost:3000/about
routes.get("/addtocart/:id", CartCtrl.add);
routes.get("/mycart", CartCtrl.mycart);


module.exports = routes;