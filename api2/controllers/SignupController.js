var UserModel = require("../models/UsersModel");
exports.index = (req, res)=>{
    // console.log(req.body);
    UserModel.save(req.body, function(err, result){
        // console.log(result);
        res.send({ success : true });
    })
}