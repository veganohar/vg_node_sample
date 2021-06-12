const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.employee = require("./employee.model");
module.exports = db;