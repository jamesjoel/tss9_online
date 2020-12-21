var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    fullname : {
        type : String
    },
    username : {
        type : String
    },
    password : {
        type : String
    },
    address : {
        type : String
    },
    city : {
        type : String
    },
    contact : {
        type : String
    },
    gender : {
        type : String
    }
});

module.exports = mongoose.model("User", UserSchema);