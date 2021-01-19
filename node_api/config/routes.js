var routes = require("express").Router();

routes.use("/api/employee", require("../controller/employeeController"));
routes.use("/api/teacher", require("../controller/teacherController"));

module.exports = routes;