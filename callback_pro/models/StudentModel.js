var connect = require("../config/connection");

module.exports.find = function(cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("student").find().toArray(cb);
    });
}

module.exports.save = function(obj, cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("student").insert(obj, cb);
    })
}

module.exports.update = function(){
    connect(function(err, con){

    });
}


module.exports.delete = function(where, cb){
    connect(function(err, con){
        var db = con.db("tss9");
        db.collection("student").remove(where, cb);
    })
}