const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
const db = require("./app/models");
const dbconfig = require("./app/config/db.config");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(PORT,()=>{
    console.log("Sample Node project is running at http://localhost:"+PORT);
})

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");
})

db.mongoose.connect(`mongodb://${dbconfig.HOST}:${dbconfig.PORT}/${dbconfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log("Connected to DB successfully");
  }).catch((err)=>{
    console.log(err);
    process.exit();
  })

require("./app/routes/test.route")(app);
require("./app/routes/employee.route")(app);;