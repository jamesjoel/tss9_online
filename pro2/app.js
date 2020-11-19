var express = require("express");
var app = express();
/*
    var a = 100;
    const app = 200;

    

    app = 500;
    

    cont a = 100;

    a = 200;

*/

// create our routes
app.get("/", function(req, res){ // localhost:3000
    //console.log("hello");
    res.sendFile(__dirname+"/home.html");
});

app.get("/about", function(req, res){ // localhost:3000/about
    //console.log("this is about page");
    res.sendFile(__dirname+"/about.html");
});

app.get("/contact", function(req, res){ // localhost:3000/contact
    //console.log("----------this is contact page")

    //res.send("this is contact page");
    res.sendFile(__dirname+"/contact.html");

})


app.listen(3000, function(){
    console.log(__dirname);
    console.log("server running");
});

/*
    res.send()          ------ send data from server to client
    res.sendFile()      ------ send file from server to client
    res.render()        ------ send data and file both from server to client
    res.redirect()      ------ redirect to another url



*/