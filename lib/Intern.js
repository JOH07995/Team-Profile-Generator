// define and export the Intern class. This class inherits from Employee.

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email, title);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.extra = school;

        this.getSchool = function () {
            return school;
        }
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;