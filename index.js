//Include packages needed for this assignment
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const renderHTML = require('./renderHTML')
const fs = require('fs');

//TO-DO
// 1. Write our classes to construct new objects with this data
// new Manager(inquirer answers)
// 2. push those new objects into an array.
// 3. then run that array through our html template function
// 4. Write your tests to pass or not; then the class to match
// 5. Since we will be sending an array to our html template function- add that functionality to our inquirer logic.
// 6. return an array of employee objects
// 7. write html templates w/ bootstrap



const questions = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team member's name?",
        },
        {
            type: 'list',
            name: 'role',
            message: "Select team member's role",
            choices: [
                'Engineer',
                'Intern',
                'Manager',
            ]
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
        }
    ]);

const employeeArray = [];


function addMoreEmployees() {
    questions().then(({ name, employeeId, email, role }) => {
        // console.log(name, employeeId, email, role)
        let roleInfo = "";
        // console.log(role[0]);
        if (role[0] == "E") {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the Engineer's github username?"
                }
            ]).then(({ github }) => {
                console.log("About to create Engineer:", name, employeeId, email, github, role)
                let employee = new Engineer(name, employeeId, email, github, role)
                employeeArray.push(employee);
                askForMore();
            });
        }

        if (role[0] == "I") {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school does your intern attend?'
                }
            ]).then(({ school }) => {
                console.log("About to create Intern:", name, employeeId, email, school, role)
                let employee = new Intern(name, employeeId, email, school, role)
                employeeArray.push(employee);
                askForMore();
            });
        }
        if (role[0] == "M") {

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: 'What is the managers office number?'
                }
            ]).then(({ office }) => {
                console.log("About to add new Manager:", name, employeeId, email, office, role)
                let employee = new Manager(name, employeeId, email, role, office)
                employeeArray.push(employee);
                askForMore();
            })
        }
    })

}

function askForMore() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add more Employees?',
            choices: ['Yes',
                'No']
        }
    ]).then((response) => {
        if (response.add === "Yes") {
            addMoreEmployees()
        }
        if (response.add === "No") {
            //console.log(employeeArray)
            const html = renderHTML(employeeArray);
            console.log(html)
            saveHTML(html);
            return true;
            //
        }

    })
}

function saveHTML(html) {
    fs.writeFileSync('dist/generate.html', html, err => {
        if (err) throw err
    })
}

/* ENTRY POINT
*/

addMoreEmployees();
