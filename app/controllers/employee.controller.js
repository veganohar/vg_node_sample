const db = require("../models");
const Employee = db.employee;

exports.creteEmployee = (req,res)=>{
    let data = req.body;
    let employee = new Employee();
    for(let p in employee){
         employee[p] = data[p];
    }
    employee.save((err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.status(201).send({
            data:response,
            message:"Employee created Suceesfully"
        })
    })
}