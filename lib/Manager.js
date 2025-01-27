const Employee = require('../lib/Employee');

// create a Manager class that extends Employee
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
