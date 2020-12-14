exports.index = (req, res)=>{
    var pagedata = { title : "Signup", pagename : "signup/index"}
    res.render("layout", pagedata);
}

