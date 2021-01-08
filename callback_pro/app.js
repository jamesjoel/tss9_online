const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(require("./config/routes"));

const port = 3000;
app.listen(port, ()=>{
    console.log("server running with port : ", port);
})
