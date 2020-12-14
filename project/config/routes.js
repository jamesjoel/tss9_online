var routes = require("express").Router();

var Home = require("../routes/Home");
var Login = require("../routes/Login");
var Signup = require("../routes/Signup");
var About = require("../routes/About");
var Contact = require("../routes/Contact");

var Admin = require("../routes/Admin");

routes.use("/", Home);
routes.use("/login", Login);
routes.use("/signup", Signup);
routes.use("/about", About);
routes.use("/contact", Contact);
routes.use("/admin", Admin);

module.exports = routes;

/*
    locahost:3000/about
    locahost:3000/about/info
    locahost:3000/about/detail

    localhost:3000/contact
    localhost:3000/contact/moreinfo


*/