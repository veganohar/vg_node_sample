const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Sample Node project is running at http://localhost:"+PORT);
})

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");
})

app.post("/postMethod",(req,res)=>{
    res.send("Post Method is working");
})

app.put("/putMethod",(req,res)=>{
    res.send("Put Method is working");
})

app.delete("/deleteMethod",(req,res)=>{
    res.send("Delete Method is working");
})