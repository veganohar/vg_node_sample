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


require("./app/routes/test.route")(app);