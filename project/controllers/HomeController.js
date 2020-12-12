exports.index = (req, res)=>{
    var pagedata = { title : "Home Page", pagename : "home/index"};
    res.render("layout", pagedata);
}