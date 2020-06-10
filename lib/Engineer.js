// define and export the Engineer class. This class inherits from Employee.

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github, title) {
        super(name, id, email, title);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.extra = github;

        this.getGithub = function() {
            return github;
        }
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;