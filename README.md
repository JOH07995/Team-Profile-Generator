# Team-Profile-Generator

Node.js application that creates an `.html` file based on the user's input using the command line (CLI). The generated webpage displays the Team composition, which could include the roles of Manager, Engineers, and Interns. This would be a great tool to quickly deliver contact and role information to stakeholders, from collaborators to direct reports.

## Getting Started
### Installation
Run:

```bash
npm i
```

### Usage
After installation, in the terminal, run:

```bash
npm start
```

This will start the script. The user will be prompted with a series of questions relating to the manager of the team. After the data for the manager is collected, the user will be able to add an engineer or an intern to the team, with the corresponding questions following. The user may add as many engineers/interns as necessary before opting to finish building the team. All of the data will be written to a `.html` file which will then be saved to the `output/` folder and opened for the user to view. 

This starts the script. The user will be prompted with a series of questions related to the Team Manager. After that data is collectedm the uesr is then able to add an Engineer or Intern to the team, with questions for each to answer. Users can add as few or many Engineers and Interns to the Team before choosing to finish the submission. All of the data collected will be written to an `.html` file which is saved to the `output/` folder.

The data displayed for each of the team members are:
* Name
* Role
* ID
* Email

In addition to the above, each role has unique data:
* Manager - Office Room Number
* Engineer - GitHub UserName
* Intern - Educational Institution

# Technologies

This application was built with:

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* JavaScript
* [Node.js](https://nodejs.org/en/)

The dependencies required:

```
  "dependencies": {
    "inquirer": "^6.3.1"
  },
  "devDependencies": {
    "jest": "^24.8.0"
  }
```

Documentation on dependencies:

* [Inquirer](https://www.npmjs.com/package/inquirer#documentation) - used to prompt the user and store their answers
* [Jest](https://jestjs.io/docs/en/getting-started) - unit testing framework

# Testing
Run:
```bash
npm test
```

Which will start the `jest` module to run the tests in the `tests/` folder.