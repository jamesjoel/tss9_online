exports.index = (req, res)=>{
    var pagedata = { title : "Login", pagename : "login/index"}
    res.render("layout", pagedata);
}

