var express = require("express");
var routes = express.Router();

var home = require("../controllers/home");
var about = require("../controllers/about");
var contact = require("../controllers/contact");
var help = require("../controllers/help");

routes.use("/", home);
routes.use("/about", about);
routes.use("/contact", contact);
routes.use("/help", help);



module.exports = routes;

/*
localhost:3000  ------ (controller)home.js ------ views->home->index.ejs



localhost:3000/about ----- (controller)about.js ---- views->about->index.ejs
localhost:3000/about/info -(controller)about.js ---- views->about->info.ejs
localhost:3000/about/more -(controller)about.js ---- views->about->more.ejs



localhost:3000/contact --- (controller)contact.js ---- views->contact->index.ejs
localhost:3000/contact/terms --- (controller)contact.js ---- views->contact->ters.ejs















*/