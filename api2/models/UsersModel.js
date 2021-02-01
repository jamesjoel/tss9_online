var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("users").insertOne(obj, cb);
    })
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("users").find(where).toArray(cb);
    })
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("users").update(where, { $set : obj }, cb);
    })
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("users").remove(where, cb);
    })
}