var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "Home", pagename : "home/index" };
    res.render("layout", pagedata);
});

module.exports = routes;