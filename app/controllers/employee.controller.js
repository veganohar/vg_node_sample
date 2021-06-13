const db = require("../models");
const Employee = db.employee;

exports.creteEmployee = (req,res)=>{
    let data = req.body;
    let employee = new Employee();
    for(let p in data){
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

exports.getAllEmployees = (req,res)=>{
    Employee.find((err,employees)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            data:employees
        })
    })
}

exports.updateEmployee = (req,res)=>{
    let data = req.body;
    Employee.updateOne({_id:data.id},data,(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            data:response,
            message:"Employee updated successfully"
        })
    })
}

exports.deleteEmployee = (req,res)=>{
    Employee.deleteOne({_id:req.params.eid},(err,response)=>{
        if(err){
            return res.status(500).send({message:err});
        }
        res.send({
            data:response,
            message:"Employee deleted successfully"
        })
    })
}
