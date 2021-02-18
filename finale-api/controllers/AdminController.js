var AdminModel = require("../models/AdminModel");
var jwt = require("jsonwebtoken");
var sha1 = require("sha1");
var config = require("../config/config");
exports.login = (req, res)=>{
    // console.log(req.body);
    var u = req.body.username;
    var p = req.body.password;
    AdminModel.find({ username : u }, function(err, result){
        console.log("------", result);
        if(result.length == 1)
        {
            if(result[0].password == sha1(p))
            {
                var token = jwt.sign({ adminid : result[0]._id }, config.tokenKey, { expiresIn : "24h" });
                res.status(200).json({ success : true, token });

            }
            else
            {

                res.status(401).json({ success : false, type : 2 });
            }
        }
        else
        {
            res.status(401).json({ success : false, type : 1 });
        }
    })
}