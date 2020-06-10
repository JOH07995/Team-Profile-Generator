const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = [];
let employeeId = [];



console.log("Please tell me about your team: ");

// First Prompt

const templateStart = () => {
    inquirer.prompt([
        //takes in name 
        {
            type: "input",
            message: "What is the Manager's Name?",
            name: "name"
        },
        //takes in id, if it's NaN it just lets you continue with NaN, no catch
        {
            type: "number",
            message: "What is the Manager's ID Number?",
            name: "id",
            //validate: function()
            validate: validateId
        },
        //takes in email
        {
            type: "input",
            message: "What is the Manager's email address?",
            name: "email"
        },
        //takes in phonenumber
        {
            type: "number",
            message: "What is the manager's Office Phone Number?",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "What type of team member would you like to add now?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members, thanks!"],
            name: "action"
        }
    ]).then((prompt) => {

        const newManager = new Manager(prompt.name, prompt.id, prompt.email, prompt.officeNumber);

        employees.push(newManager);
        employeeId.push(prompt.id);

        switch (prompt.action) {
            case "Engineer":
                engineerStart();
                break;
            case "Intern":
                internStart();
                break;
            default:

                fs.writeFile(outputPath, render(employees), function (err) {
                    if (err) {
                        throw err;
                    }
                });
                console.log("Your HTML has been rendered! Check it out in the Output folder!");
                break;
        }
    });
};



// Second Prompt

const secondPrompt = () => {
    inquirer.prompt([
        // > Engineer
        // > Intern
        // > None
        {
            type: "list",
            message: "What type of team member would you like to add now?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members, thanks!"],
            name: "action"
        }
    ]).then((prompt) => {
        switch (prompt.action) {
            case "Engineer":
                engineerStart();
                break;
            case "Intern":
                internStart();
                break;
            default:

                fs.writeFile(outputPath, render(employees), function (err) {
                    if (err) {
                        throw err;
                    }
                });
                console.log("Your html has been rendered! Head over to the Output folder!");
                break;
        }
    });
};

// Prompt: Engineer

const engineerStart = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Engineer's Name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the Engineer's ID Number?",
            name: "id",
            validate: validateId
        },
        {
            type: "input",
            message: "What is the Engineer's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Engineer's GitHub UserName?",
            name: "github"
        }
    ]).then((prompt) => {
        //create new engineer
        const newEngineer = new Engineer(prompt.name, prompt.id, prompt.email, prompt.github);

        //push it to an array of employees
        employees.push(newEngineer);
        employeeId.push(prompt.id);

        //start over again with secondPrompt()
        secondPrompt();
    });
};

// Prompt: Intern

const internStart = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the Intern's Name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is the Interns's ID Number?",
            name: "id",
            validate: validateId
        },
        {
            type: "input",
            message: "What is the Interns's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Where is the Intern attending school?",
            name: "school"
        }
    ]).then((prompt) => {
        const newIntern = new Intern(prompt.name, prompt.id, prompt.email, prompt.school);

        employees.push(newIntern);
        employeeId.push(prompt.id);

        secondPrompt();
    });
};

//Kicks things off
templateStart();


//function to validate ID as a number, and if ID is already in use
function validateId(input) {
    if (isNaN(input)) {
        return "Please enter a four digit employee ID number!";
    }
    for (i = 0; i < employeeId.length; i++) {
        if (input === employeeId[i]) {
            return "That ID number is already in use!"
        }
    }
    return true;
};