var express = require("express");
var routes = express.Router();


routes.get("/", (req, res)=>{
    var pagedata = {title : "Help", pagename : "help/index"};
    res.render("layout", pagedata);
});

module.exports = routes;