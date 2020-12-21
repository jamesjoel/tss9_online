var sha1 = require("sha1");
var UserModel = require("../models/UserModel");
exports.index = (req, res)=>{
    var pagedata = { title : "Signup", pagename : "signup/index"}
    res.render("layout", pagedata);
}

exports.save=(req, res)=>{
    // console.log(req.body);
    req.body.password = sha1(req.body.password);
    delete req.body.re_pass;

    req.body.fullname = req.body.full_name;
    delete req.body.full_name;
    /*
    var obj = { fullname : req.body.full_name, }
    */
    UserModel.create(req.body, (err, result)=>{
        req.flash("success_msg", "Registraion is Succfull, Please Login Here");
        res.redirect("/login");
    });

}