const fs = require('fs');

//make a function passing employeeArray inside =>{
//let renderedHTML is empty string
//employeeArray.forEach(object => {
//    let currentCard = `
//    HTML HERE ${employee.name}
//    ` 

//    if/else if/else if (element.role == Engineer)
//    currentCard += (link or ANCHOR for github)

//    currentCard += <!--end HTML-->

//    function to call after the HTML uses fs to create HTML and CSS

//    const css template = 
//    CSS HERE LIKE navber{

//    }

//    module.exports = renderHTML
// })
// }

const renderHTML = (employeeArray) => {
    let renderHTML = '';
    employeeArray.forEach(object => {
        let currentCard =
            `
        <div class="card employeeCard">
            <div class="card-header">
                <h5 class="staff">${object.name}</h5>
                <h6 class="staff mb-2">${object.role}</h6>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${object.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${object.email}">${object.email}</a></li>`
        if (role == 'E') {
            currentCard += `<li class="list-group-item">Github: <a href="https://github.com/${object.github}"</a></li>`
        }
        else if (role == "I") {
            currentCard += `<li class="list-group-item">School: ${object.school}</li>`
        }
        else if (role == "M") {
            currentCard += `<li class="list-group-item">Office Number: ${object.office}</li>`
        }

        currentCard += `
        </ul>
        </div>
        `

    })
}