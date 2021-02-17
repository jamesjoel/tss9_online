var database = require("../config/database");

module.exports.find=function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("admins").find(where).toArray(cb);
    })
}