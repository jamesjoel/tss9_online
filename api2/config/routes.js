var routes = require("express").Router();


routes.use("/api/employee", require("../routes/Employee"));

module.exports = routes;