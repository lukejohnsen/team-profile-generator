const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeHtml = require('./src/template');

const employees = [];

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an employee?",
            default: true
        }
    ])
    .then(answers => {
        if (answers.addEmployee) {
            addRole();
        } else {
            writeToFile();
        }
    })
};

const addRole = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Which team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
    .then(answers => {
        if (answers.role === "Manager") {
            addManager()
        } else if (answers.role === "Engineer") {
            addEngineer();
        } else if (answers.role === "Intern") {
            addIntern();
        }
    })
}

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the name of the Manager?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?",
        },
        {
            type: "input",
            name: "number",
            message: "What is the office phone number?"
        }
    ])
        .then(answers => {
            addEmployee();
            const manager = new Manager(answers.manager, answers.id, answers.email, answers.number);

            employees.push(manager);
        })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is the name of the Engineer?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub?"
        }
    ])
        .then(answers => {
            addEmployee();
            const engineer = new Engineer(answers.engineer, answers.id, answers.email, answers.github);

            employees.push(engineer);
        })
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "intern",
            message: "What is the name of the Intern?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What school is the Intern from?"
        }
    ])
        .then(answers => {
            addEmployee();
            const intern = new Intern(answers.intern, answers.id, answers.email, answers.school);

            employees.push(intern);
        })
};

function writeToFile() {
    fs.writeFileSync("./dist/index.html", employeeHtml(employees))
};

addEmployee();