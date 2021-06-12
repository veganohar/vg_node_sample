const controller = require("../controllers/employee.controller");
module.exports = function(app){
    app.post("/ap/employees/creteEmployee",controller.creteEmployee);
}