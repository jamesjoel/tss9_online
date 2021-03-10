var mongoose= require('mongoose');

var url= 'mongodb://localhost:27017/shop';

mongoose.connect(url,{ useNewUrlParser: true },(err)=>{
    if(err){
        console.log(err);
//console.log("datasurabase");
        return;
    }
})