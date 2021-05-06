const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Sample Node project is running at http://localhost:"+PORT);
})

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");
})