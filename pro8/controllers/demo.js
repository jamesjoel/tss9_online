var express = require("express");
var routes = express.Router();

// localhost:3000/demo

routes.get("/", (req, res)=>{
    var pagedata = { title : "Demo Page", pagename : "demo/index"};
    res.render("layout", pagedata);
})

module.exports = routes;