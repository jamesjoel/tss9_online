const routes = require("express").Router();

routes.use("/", require("../controllers/home"));
// routes.use("/teacher", require("../controllers/teacher"));
routes.use("/student", require("../controllers/student"));


module.exports = routes;