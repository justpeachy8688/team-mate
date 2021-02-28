//Include packages needed for this assignment
const inquirer = require('inquirer');
const jest = require('jest');

const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is the team member's employee ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team member's email?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team member's office number?",
        }
    ]);

const generateHTML = (answers) => {

};