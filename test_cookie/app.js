var express = require("express");
var app = express();
var session = require("express-session");
var cookie = require("cookie-parser");

app.use(cookie());
app.use(session({ secret : "HELLO"}));

app.get("/", (req, res)=>{

    // res.cookie(cookie name, cookie value, expire time);
    // 1 hr = 60*60*1000
    res.cookie("name", "rohit", { expires : new Date(Date.now()+(60*60*24*1000)) , httpOnly : true});
    res.cookie("city", "indore", { expires : new Date(Date.now()+(60*60*24*1000)) , httpOnly : true});

    res.send("home page");
})

app.get("/demo", (req, res)=>{
    console.log(req.cookies);
    // res.clearCookie(name);
    
})

app.listen(3000);