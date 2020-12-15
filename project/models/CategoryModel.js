var mongoose = require('mongoose');
var categorySchema = new mongoose.Schema({
    name : {
        type : String
    }
});

module.exports = mongoose.model("Category", categorySchema);


/*
var productSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    detail : {
        type : String
    }
})

*/