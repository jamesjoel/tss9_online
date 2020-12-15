var mongoose = require("mongoose");
var url = "mongodb://localhost:27017/tss9";
mongoose.connect(url, { useNewUrlParser : true }, (err)=>{
    if(err){
        console.log(err);
        return;
    }
});