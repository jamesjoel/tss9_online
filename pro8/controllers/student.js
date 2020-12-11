var express = require("express");
var routes = express.Router();

var MongoClient = require("mongodb").MongoClient;

var mongo = require("mongodb");

var url = "mongodb://localhost:27017";


routes.get("/", (req, res)=>{
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        // db.collection("student").find((err, result)=>{
        //     if(err){
        //         console.log("error in find", err);
        //         return;
        //     }
        //     console.log(result);
        // });

        db.collection('student').find().toArray((err, result)=>{
           if(err){
               console.log("table error-----", err);
               return;
           } 
            // console.log(result);
            var pagedata = { title : "Student", pagename : "student/index", result : result };
            res.render("layout", pagedata);
        });

    });



   
});
routes.get("/add", (req, res)=>{
    var pagedata = { title : "Student", pagename : "student/add" };
    res.render("layout", pagedata);
})


routes.post("/", (req, res)=>{
    // var data = [req.body];
    var data = req.body;
    // http://firebase.mongodb.com?username=rohit&password=123
    MongoClient.connect(url, (err, con)=>{
        if(err){
            console.log("connection error", err);
            return;
        }
        // select or use database
        var db = con.db("tss9");
        // db.employee.insert([{ name : "rohit "}, { name : "james"}])

        db.collection("student").insertOne(data, ()=>{
            res.redirect("/student");
        });
        
    });
});
// localhost:3000/student/delete
routes.get("/delete/:id", (req, res)=>{
    var id = req.params.id;
    // 542sdd2652
    id = mongo.ObjectId(id);
    // ObjectId("542ssdd2652")
    
    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").removeOne({ _id : id }, ()=>{
            res.redirect("/student");
        });
        
    })


    // console.log(req.params);
    // console.log("this is delete student");
});
/*



    CRUD ----

    Create
    Retrive
    Update 
    Delete

*/
routes.get("/view/:id", (req, res)=>{
    var id = req.params.id;

    id = mongo.ObjectId(id);

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").findOne({ _id : id }, (err, result)=>{
        
            console.log(result); 
            var pagedata = { title : "Student", pagename : "student/view", result : result };
            res.render("layout", pagedata);
        })

        // db.collection("student").find({ _id : id }).toArray((err, result)=>{
        //     console.log(result);
        //     var pagedata = { title : "Student", pagename : "student/view", result : result[0] };
        //     res.render("layout", pagedata);
        // });
    });

});




/*
    res.render()
    res.sendFile()
    res.send()
    res.redirect()

*/


routes.get("/edit/:id", (req, res)=>{
    var id = req.params.id;

    id = mongo.ObjectId(id);

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").findOne({ _id : id }, (err, result)=>{
        
            //console.log(result); 
            var pagedata = { title : "Student", pagename : "student/edit", result : result };
            res.render("layout", pagedata);
        });
    });
});

routes.post("/edit", (req, res)=>{
    // console.log(res);
    // console.log(req.body);
    var id = req.body.id;
    id = mongo.ObjectId(id);

    delete req.body.id;
    // { id, name, age, address, gender, city }

    MongoClient.connect(url, (err, con)=>{
        var db = con.db("tss9");
        db.collection("student").updateOne({ _id : id }, { $set : req.body }, ()=>{
            res.redirect("/student");
        })
    })
})


module.exports = routes;

/*

db.collection("").updateOne({ age : 25 }, { $set : { city : "indore", fee : 2000 }}, ()=>{
db.collection("").updateOne({ age : 25 }, { city : "indore", fee : 2000 }, ()=>{

})

{
   
    city : "indore",
    fee : 2000




}




*/