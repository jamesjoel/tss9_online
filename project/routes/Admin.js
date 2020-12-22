var routes = require("express").Router();
var AdminCtrl = require("../controllers/AdminController");

routes.get("/", AdminCtrl.login);
routes.post("/login", AdminCtrl.do_login);




routes.get("/dashboard", backdoorCheck, AdminCtrl.index);
routes.get("/product", backdoorCheck, AdminCtrl.product);
routes.get("/category", backdoorCheck, AdminCtrl.category);
routes.get("/category/view", backdoorCheck, AdminCtrl.view_category);

routes.post("/category",  backdoorCheck, AdminCtrl.insert_category);
routes.get("/demo", backdoorCheck, AdminCtrl.insert_admin);
routes.get("/users",  backdoorCheck, AdminCtrl.users);

 
routes.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/admin");
});


// back door check middleware
function backdoorCheck(req, res, next){
    if(! req.session.is_admin_logged_in)
    {
        res.redirect("/admin");
        return;
    }
    next();
}





module.exports = routes;



//d4b8d6e468211b5cfb9b73a94a6ed74ddc59c68b
