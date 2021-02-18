var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("product").find(where).toArray(cb);
    })
}
module.exports.add = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("product").insertOne(obj, cb);
    })
}
module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("product").update(where, { $set : obj }, cb);
    })
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("product").remove(obj, cb);
    })
}