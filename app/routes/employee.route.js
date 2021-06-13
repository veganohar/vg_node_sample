const controller = require("../controllers/employee.controller");
module.exports = function(app){
    app.post("/api/employees/creteEmployee",controller.creteEmployee);
    app.get("/api/employees/getAllEmployees",controller.getAllEmployees);
    app.put("/api/employees/updateEmployee",controller.updateEmployee);
    app.delete("/api/employees/deleteEmployee/:eid",controller.deleteEmployee);
}