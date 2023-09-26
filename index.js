// Write your solution in this file!
var employee = {
    name : 'Sam',
    streetAddres: '12 Broadway'

}    
function updateEmployeeWithKeyAndValue (employee, key, value) {
    return {...employee, [key]: value};

} 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;

} 
function deleteFromEmployeeByKey(employee, key){
    var newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;

} 
 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}
var updateEmployee = updateEmployeeWithKeyAndValue(employee, "position", "manager");
console.log(updateEmployee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, "salary", 5000)
var employeesWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeesWithoutAddress);
destructivelyDeleteFromEmployeeByKey(employee, "position");
console.log(employee); 



