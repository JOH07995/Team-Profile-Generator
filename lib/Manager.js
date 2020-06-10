// define and export the Manager class. This class inherits from Employee.

const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email, title);
        this.officeNumber = officeNumber;
        this.extra = officeNumber;

        this.getOfficeNumber = function() {
            return officeNumber;
        };
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;