var express = require("express");
var routes = express.Router();

routes.get("/", (req, res)=>{
    var pagedata = { title : "About", pagename : "about/index" };
    res.render("layout", pagedata);
});
routes.get("/info", (req, res)=>{
    var pagedata = { title : "Info", pagename : "about/info" };
    res.render("layout", pagedata);
});
routes.get("/more", (req, res)=>{
    var pagedata = { title : "More", pagename : "about/more" };
    res.render("layout", pagedata);
});



module.exports = routes;