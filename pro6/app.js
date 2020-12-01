var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
// app.set('views', 'layout');
// all static file 

app.use(express.static(__dirname+"/assets"));
// app.use(bodyParser());
app.use(bodyParser());



app.get('/', function(req, res){
    var pageData = { pagename : "home", title : "Home" };
    res.render('layout', pageData);
});
app.get('/about', function(req, res){
    var pageData = { pagename : "about", title : "About" };
    res.render('layout', pageData);
});

app.get("/contact", function(req, res){
    var pageData = { pagename : "contact", title : "Contact Page"};
    res.render("layout", pageData);
});

app.get("/help", function(req, res){
    var pageData = { pagename : "help", title : "Help Page"};
    res.render("layout", pageData);
})



app.post("/", function(req, res){
    console.log(req.body);
    // console.log(req.body.f_name);
    // console.log(req);
});



app.listen(3000, function(){
    console.log("server running");
})
