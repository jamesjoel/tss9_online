var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fileupload = require("express-fileupload");
var session = require("express-session");
var flash = require("express-flash");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(fileupload());
app.use(session({ secret : "hello"}));
app.use(flash());



app.get("/", (req, res)=>{
    var pagedata = { msg : req.flash("msg") };
    res.render("index", pagedata);
})

app.post("/upload", (req, res)=>{
    // form data comes in --------- req.body
    // url data comes in -------- req.params
    // file data comes in ----- req.files
    console.log(req.files.image);

    var name = req.files.image.name; // image10.jpg
    var size = req.files.image.size; // bytes -- 510

    var arr = name.split("."); // break name by .
    var n = arr.length; // get array length

    var ext = arr[n-1]; // get last value of array

    if(ext=="jpg" || ext == "jpeg" || ext == "png" || ext == "gif")
    {
        if(size <= (1024*1024)) // check file less then 1 mb
        {
            req.files.image.mv("./user_images/"+name, (err)=>{
                if(err){
                    console.log("--------", err);
                    return;
                }
                req.flash("msg", "File Uploaded successfuly");
                res.redirect("/");
            });
        }
        else
        {
            req.flash("msg", "This file size is too large");
            res.redirect("/");
        }
    }
    else
    {
        req.flash("msg", "This file type not allowd");
        res.redirect("/");
    }




    /*
        image.10.hello.jpg.png

        ["image, 10, "hello", "jpg", "png"]
        length  = 5

        arr[4];




    */
    


})


app.listen(3000, ()=>{
    console.log('server running');
})