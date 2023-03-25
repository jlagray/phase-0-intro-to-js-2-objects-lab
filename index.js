// Write your solution in this file!
const employee = {
    name:"", streetAddress:""
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee [key];
    return employee;
}