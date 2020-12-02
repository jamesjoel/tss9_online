var express = require("express");
var routes = express.Router();
/*
    methods in routes 
        get
        post
        put
        delete
        all
        use


    not avalable --------    listen, set


*/



routes.get("/", (req, res)=>{

    // console.log(req.logo);
    var pageData = { title : "Home Page", pagename : "home"};
    res.render("layout", pageData);
});

routes.get("/about", (req, res)=>{
    // console.log(req.logo);
    var pageData = { title : "About Page", pagename : "about"};
    res.render("layout", pageData);
});
routes.get("/help", (req, res)=>{
    var pageData = { title : "Help Page", pagename : "help"};
    res.render("layout", pageData);
});
routes.post("/", (req, res)=>{
    console.log(req.body);
})


module.exports = routes;