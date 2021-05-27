const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
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

app.post("/dataBody",(req,res)=>{
    res.send(req.body);
})

app.post("/dataParams/:name/:age",(req,res)=>{
    res.send(req.params);
})
app.post("/dataQuery",(req,res)=>{
    res.send(req.query);
})
app.get("/sample",(req,res)=>{
    res.render("sample");
})

app.get("/dynamic",(req,res)=>{
    res.render("dynamic",{message:"Welcome to Dynamic Ejs"});
})

app.get("/form",(req,res)=>{
    res.render("form");
})

app.post("/result",(req,res)=>{
    res.render("result",req.body);
})