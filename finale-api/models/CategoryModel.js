var database = require("../config/database");

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("category").find(where).toArray(cb);
    })
}
module.exports.add = function(obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("category").insertOne(obj, cb);
    })
}
module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("category").update(where, { $set : obj }, cb);
    })
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("category").removeOne(where, cb);
    })
}