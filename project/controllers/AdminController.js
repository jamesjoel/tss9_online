var CategoryModel = require("../models/CategoryModel");
var AdminModel = require("../models/AdminModel");
// var bcrypt = require("bcrypt");
var sha1 = require("sha1");




exports.do_login=(req, res)=>{
    // console.log(req.body);
    var username = req.body.username; // sdfgsdfg
    var password = sha1(req.body.password); // admin
    // console.log(password);

    AdminModel.find({ username : username }).exec(function(err, result){
        // console.log("----------------", result);
        if(result.length == 1) // if username is matach
        {
            if(result[0].password == password)
            {
                // create some session for backdoor
                req.session.admin_id = result[0]._id;
                req.session.admin_username = result[0].username;
                req.session.is_admin_logged_in = true;
                res.redirect("/admin/dashboard");
            }
            else
            {
                req.flash("msg", "This Password is incorrect !");
                res.redirect("/admin");
            }
        }
        else // if username not matched
        {
            req.flash("msg", "This Username and Password is incorrect !");
            res.redirect("/admin");
        }
    });

}
exports.login = (req, res)=>{
    var pagedata = { title : "Login", errorMsg : req.flash("msg") };
    res.render("admin/login", pagedata);
}
exports.index = (req, res)=>{
    // if(! req.session.is_admin_logged_in)
    // {
    //     res.redirect("/admin");
    // }

    var pagedata = { title : "Dashboard", pagename : "admin/dashboard" };
    res.render("admin_layout", pagedata);
}
exports.product = (req, res)=>{
    
    var pagedata = { title : "Products", pagename : "admin/product"};
    res.render("admin_layout", pagedata);
}
exports.category = (req, res)=>{
    
    var pagedata = { title : "Category", pagename : "admin/category"};
    res.render("admin_layout", pagedata);
    
}

exports.insert_category = (req, res)=>{
    // console.log(req.body);
    var data = { name : req.body.category_name };
    CategoryModel.create(data, (err, result)=>{
        // console.log(result);
        res.redirect("/admin");
    })

}

exports.insert_admin = (req, res)=>{
    var pass = "admin";
    var newpass = sha1(pass);
    console.log(newpass)
    var data = { username : "admin", password : newpass };
    AdminModel.create(data, (err, result)=>{
        console.log(result);
    })
}
// d4b8d6e468211b5cfb9b73a94a6ed74ddc59c68b

exports.users = (req, res)=>{
    var pagedata = { title : "Users", pagename : "admin/users"};
    res.render("admin_layout", pagedata);
}