
//Include packages needed for this assignment
const inquirer = require('inquirer');



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

questions().then((answers) => {
    console.log(answers)
})

//new Employee(name, employeeId, email, office) {

//}

const manager = new manager(name, employeeId, email, office)


const manager = {
    name: '__',
    id: '__',
    email: '__',
    office: '__'
};


// class Manager
// class Engineer 
// class Intern

// new Manager(inquirer, answers) {

// };




// function questionsTwo = () => {

// };

// const generateHTML = (answers) => {

// };