var jwt = require("jsonwebtoken");
var key = "my project";
module.exports.tokenKey = key;


module.exports.backdoor_admin=function(req, res, next){
    if(! req.headers.authorization || req.headers.authorization == "")
    {
        return res.status(401).send("Somthing went wrong !");
    }
    else{
        var token = req.headers.authorization;
        var check = jwt.verify(token, key);
        if(! check)
        {
            return res.status(401).send("Somthing went wrong !");
        }
        req.adminid = check.adminid;
        next();
    }
}