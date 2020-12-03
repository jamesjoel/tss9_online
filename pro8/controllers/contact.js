var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "Contact", pagename : "contact/index" };
    res.render("layout", pagedata);
});
routes.get("/terms", (req, res)=>{
    var pagedata = { title : "Terms", pagename : "contact/terms" };
    res.render("layout", pagedata);
});



module.exports = routes;