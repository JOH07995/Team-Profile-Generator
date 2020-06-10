// define and export the Employee class

class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = title;


        this.getName = function () {
            return this.name;
        };
        this.getId = function () {
            return this.id;
        };
        this.getEmail = function () {
            return this.email;
        };
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;


  //module.exports --> https://www.sitepoint.com/understanding-module-exports-exports-node-js/