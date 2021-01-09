var connection = require("../config/connection");

module.exports.find = function(cb){
    connection(function(err, con){
        var db = con.db("tss9");
        db.collection("student").find().toArray(cb);
    });
}

module.exports.save = function(obj, cb){
    connection(function(err, con){
        var db = con.db("tss9");
        db.collection("student").insert(obj, cb);
    })
}

module.exports.update = function(){
    connection(function(err, con){

    });
}


module.exports.delete = function(where, cb){
    connection(function(err, con){
        var db = con.db("tss9");
        db.collection("student").remove(where, cb);
    })
}