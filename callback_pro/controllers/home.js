const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("home page");
});
module.exports = routes;


/*
    res.render() --- data+file
    res.send() --- data
    res.sendFile() --- file
    res.redirect() -- redirect



*/
module.exports = routes;