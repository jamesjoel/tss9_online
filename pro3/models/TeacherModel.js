var mongoose = require("mongoose");
var teacherSchema = new mongoose.Schema({
    name : {
        type : String
    },
    age : {
        type : Number
    },
    city : {
        type : String
    }
});
module.exports = mongoose.model("Teacher", teacherSchema);