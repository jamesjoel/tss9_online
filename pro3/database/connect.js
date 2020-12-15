var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/tss9', {useNewUrlParser : true}, (err)=>{
    if(err){
        console.log("---------", err);
        return;
    }
});