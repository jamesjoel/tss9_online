var UserModel = require("../models/UsersModel");
exports.index = (req, res)=>{
    UserModel.find({ username : req.body.username }, function(err, result){
        if(result.length == 1)
        {
            res.send({ success : true });
        }
        else
        {
            res.send({ success : false });

        }
    })
}