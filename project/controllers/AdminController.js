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
exports.users = (req, res)=>{
    var pagedata = { title : "Users", pagename : "admin/users"};
    res.render("admin_layout", pagedata);
}