exports.index = (req, res)=>{
    var pagedata = { title : "Dashboard", pagename : "dashboard/index"};
    res.render("layout", pagedata);
}