var routes = require("express").Router();

var Home = require("../routes/Home");
var Login = require("../routes/Login");
var Signup = require("../routes/Signup");
var About = require("../routes/About");
var Contact = require("../routes/Contact");

var Admin = require("../routes/Admin");
var Dashboard = require("../routes/Dashboard");

routes.use("/", Home);
routes.use("/login", Login);
routes.use("/signup", Signup);
routes.use("/about", About);
routes.use("/contact", Contact);
routes.use("/admin", Admin);

routes.use("/dashboard",backdoorCheck, Dashboard);


routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/");
});

function backdoorCheck(req, res, next){
    if(! req.session.is_user_logged_in){
        res.redirect("/");
        return;
    }
    next();
}


module.exports = routes;

/*
    locahost:3000/about
    locahost:3000/about/info
    locahost:3000/about/detail

    localhost:3000/contact
    localhost:3000/contact/moreinfo


*/