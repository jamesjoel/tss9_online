var sha1 = require("sha1");
var UserModel = require("../models/UserModel");
exports.index = (req, res)=>{
    var pagedata = { title : "Login", pagename : "login/index", success_msg : req.flash("success_msg"), msg : req.flash("msg"), username : req.flash("username")}
    res.render("layout", pagedata);
}
exports.auth = (req, res)=>{
    var u = req.body.username;
    var p = sha1(req.body.password);

    // SELECT * FROM user_table WHERE username='u' AND password = 'p'
    // UserModel.find({ username : u, password : p }).exec((err, result)=>{
    UserModel.find({ username : u }).exec((err, result)=>{
        if(result.length==1)
        {
            if(result[0].password == p)
            {
                req.session.userid = result[0]._id;
                req.session.fullname = result[0].fullname;
                req.session.is_user_logged_in = true;
                res.redirect("/dashboard");
            }
            else
            {
                req.flash("username", u);
                req.flash("msg", "This Password is Incorrect");
                res.redirect("/login");
            }
        }
        else
        {
            req.flash("msg", "This Username and Password is Incorrect");
            res.redirect("/login");
        }
    });
}

