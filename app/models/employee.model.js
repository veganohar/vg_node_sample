const mongoose = require("mongoose");

const Employee = mongoose.model(
    'Employee',
    new mongoose.Schema({
        name:String,
        phone:Number,
        city:String,
        age:Number,
        salary:Number,
        createdOn:{
            type:Date,
            default: Date.now
        }        
    })
)

module.exports = Employee;