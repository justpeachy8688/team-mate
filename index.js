//Include packages needed for this assignment
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
            type: 'checkbox',
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

questions().then(({ name, employeeId, email, role }) => {
    console.log(name, employeeId, email)
    let roleInfo = "";
    if (role[0] === "Engineer") {
        let employee = new Engineer(name, employeeId, email, role)
        employeeArray.push(employee);
    }
    if (role[0] === "Intern") {
        let employee = new Intern(name, employeeId, email, role)
        employeeArray.push(employee);
    }
    if (role[0] === "Manager") {
        let employee = new Manager(name, employeeId, email, role)
        employeeArray.push(employee);
    }
    //return employee array 
})
//.then
//card for each employee

//NOTES: Need to figure out how to get employee out of the .then OR run all other processes within the .then code block OR chain .then's. LOOK UP promise.all() as a potential solution for getting back multiple promises


// console.log(employeeArray);
//new Employee(name, employeeId, email, office) {

//}

// const manager = new manager(name, employeeId, email, office)


// const manager = {
//     name: '__',
//     id: '__',
//     email: '__',
//     office: '__'
// };


// class Manager
// class Engineer 
// class Intern

// new Manager(inquirer, answers) {

// };




// function questionsTwo = () => {

// };

// const generateHTML = (answers) => {

// };