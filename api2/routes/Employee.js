var routes = require("express").Router();
var EmployeeCtrl = require("../controllers/EmployeeController");

routes.get("/", EmployeeCtrl.getEmployee);
routes.post("/", EmployeeCtrl.addEmployee);

routes.put("/:id", EmployeeCtrl.editEmployee);
routes.delete("/:id", EmployeeCtrl.deleteEmployee);

module.exports = routes;