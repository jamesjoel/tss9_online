var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").insertOne(obj, cb);
    })
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").find(where).toArray(cb);
    })
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").update(where, { $set : obj }, cb);
    })
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").remove(where, cb);
    })
}