// Creational design pattern using factory pattern in javascript

function Employee(name, type) {
  this.name = name;
  this.type = type;
}

function EmployeeService() {
  this.createEmp = (name, type) => {
    return new Employee(name, type);
  };
}
function displayEmp() {
  console.log(`My name is ${this.name} and I am from ${this.type} stream ${this.type !='DEV'?'$':'</>'}`);
}

const employee = new EmployeeService();
const employeeList = [];
employeeList.push(employee.createEmp('Sudhir', 'DEV'));
employeeList.push(employee.createEmp('Sameer', 'DEV'));
employeeList.push(employee.createEmp('Jay', 'FIN'));
employeeList.push(employee.createEmp('Pratik', 'DEV'));

employeeList.map((emp) => {
  displayEmp.call(emp);
});
