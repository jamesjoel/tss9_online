var routes = require("express").Router();


routes.use("/api/employee", require("../routes/Employee"));
routes.use("/api/signup", require("../routes/Signup"));
routes.use("/api/login", require("../routes/Login"));

module.exports = routes;