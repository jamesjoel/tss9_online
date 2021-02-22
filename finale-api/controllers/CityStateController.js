var database = require("../config/database");
exports.getall = (req, res)=>{
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("state").find().toArray(function(err, result){
            res.send(result);
        })
    })
}