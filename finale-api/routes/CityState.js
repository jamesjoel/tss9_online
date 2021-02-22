var routes = require("express").Router();
// var cityCtrl = require("../controllers/CityStateController");

// routes.get("/", cityCtrl.getall);
routes.get("/", (req, res)=>{
    res.send("hello world");
})

module.exports = routes;

