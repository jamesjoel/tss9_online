var mongoose = require("mongoose");

var teacherSchema = new mongoose.Schema({
    name : {
        type : String
    },
    city : {
        type : String
    },
    salary : {
        type : Number
    }
});

module.exports = mongoose.model("Teacher", teacherSchema);