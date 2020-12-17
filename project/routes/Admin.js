var routes = require("express").Router();
var AdminCtrl = require("../controllers/AdminController");

routes.get("/", AdminCtrl.login);
routes.post("/login", AdminCtrl.do_login);

routes.get("/dashboard", AdminCtrl.index);

routes.get("/product", AdminCtrl.product);
routes.get("/category", AdminCtrl.category);
routes.post("/category", AdminCtrl.insert_category);

routes.get("/demo", AdminCtrl.insert_admin);




routes.get("/users", AdminCtrl.users);

module.exports = routes;



//d4b8d6e468211b5cfb9b73a94a6ed74ddc59c68b
