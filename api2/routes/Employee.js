var routes = require("express").Router();
var EmployeeCtrl = require("../controllers/EmployeeController");

routes.get("/", EmployeeCtrl.getEmployee);
routes.post("/", EmployeeCtrl.addEmployee);

module.exports = routes;