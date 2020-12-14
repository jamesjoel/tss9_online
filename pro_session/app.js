var express = require("express");
var app = express();
var session = require("express-session");

app.use(session({ secret : "The Stepping Stone" }));


app.get("/about", (req, res)=>{
    req.session.name="rohit";
    req.session.age=25;
    res.send("about");
});

app.get("/contact", (req, res)=>{
    console.log(req.session);
    res.send("contact");
});

app.listen(3000, ()=>{
    console.log("running");
})