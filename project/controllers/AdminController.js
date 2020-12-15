var CategoryModel = require("../models/CategoryModel");
var AdminModel = require("../models/AdminModel");
var bcrypt = require("bcrypt");

exports.index = (req, res)=>{
    var pagedata = { title : "Dashboard", pagename : "admin/dashboard"};
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
    var bcrypt_pass = bcrypt.hash(pass, "i love my india");



    var data = { username : "admin", password : bcrypt_pass };
    AdminModel.create(data, (err, result)=>{
        console.log(result);
    })
}


exports.users = (req, res)=>{
    var pagedata = { title : "Users", pagename : "admin/users"};
    res.render("admin_layout", pagedata);
}