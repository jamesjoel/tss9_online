var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("user").find(where).toArray(cb);
    })
}
module.exports.add = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("user").insertOne(obj, cb);
    })
}
module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("user").update(where, { $set : obj }, cb);
    })
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("user").remove(obj, cb);
    })
}