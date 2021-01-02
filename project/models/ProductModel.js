var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    category : {
        type : String
    },
    detail : {
        type : String
    },
    discount : {
        type : Number
    },
    image : {
        type : String
    }
});
module.exports = mongoose.model("Product", ProductSchema);