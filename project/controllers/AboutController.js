exports.index = (req, res)=>{
    var pagedata = { title : "About Page", pagename : "about/index"};
    res.render("layout", pagedata);
}

exports.info = (req, res)=>{
    
    res.send("about --- info");
}

exports.detail = (req, res)=>{
    res.send("about --- detail");
    
}


