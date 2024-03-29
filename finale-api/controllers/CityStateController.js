var database = require("../config/database");
exports.getall = (req, res)=>{
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("state").find().toArray(function(err, result){
            res.send(result);
        })
    })
}
exports.getLimited = (req, res)=>{
    // console.log(req.params); { a : '100'}
    // console.log(req.params); { a : 100 }
    var x = parseInt(req.params.a);
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("state").find().limit(x).toArray(function(err, result){
            res.send(result);
        })
    })
}

exports.getLimitedSkip = (req, res)=>{
    // console.log(req.params); { a : '100'}
    // console.log(req.params); { a : 100 }
    var x = parseInt(req.params.a); // 100
    var y = parseInt(req.params.b); // 9
    var z = (y-1)*x; // 800
   
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("state").find().skip(z).limit(x).toArray(function(err, result){
            res.send(result);
        })
    })
}



exports.total = (req, res)=>{
    database(function(err, con){
        var db = con.db("tss9");
        db.collection("state").count(function(err, result){
            res.send({ a : result});
        })
    })
}

// db.collection().find().limit(100)