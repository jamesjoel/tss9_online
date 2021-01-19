var connect = require("../config/connect");

module.exports.save = function(obj, cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").insert(obj, cb);
    });
}

module.exports.search=function(where, cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").find(where).toArray(cb);
    });
}
module.exports.edit = function(where, obj, cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").updateMany(where, { $set : obj }, cb);
    });
}
module.exports.delete=function(where){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("employee").remove(where, cb);
    });
}
/*
var Employee = require("employeeModel");

Emplyee.seach


*/