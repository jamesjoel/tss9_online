var mongoose = require("mongoose");
var url = "mongodb://localhost:27017/tss9";
mongoose.connect(url, { useNewUrlParser : true }, (err)=>{
    console.log("connected");
    if(err){
        console.log(err);
        return;
    }
});