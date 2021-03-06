const fs = require('fs');

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
        if (object.role == "E") {
            currentCard += `<li class="list-group-item">Github: <a href="https://github.com/${object.github}"</a></li>`
        }
        else if (object.role == "I") {
            currentCard += `<li class="list-group-item">School: ${object.school}</li>`
        }
        else if (object.role == "M") {
            currentCard += `<li class="list-group-item">Office Number: ${object.office}</li>`
        }

        currentCard += `
        </ul>
        </div>
        `

        renderHTML += currentCard

    })

    HTML =
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEAM-MATE</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <style>
        body {
            background-color: #0B0C10;
            color: #C5C6C7
        }

        nav {
            background-color: #45A29E;
        }

        .container {
            padding-top: 50px;
        }
    </style>
</head>

<body>

    <header>
        <!--NAVBAR-->
        <nav class="navbar navbar-light">
            <div class="container-fluid">
                <span class="navbar-text">
                    Meet my Team!
                </span>
            </div>
        </nav>
    </header>

    <!--CARDS-->
    <div class="container">
        <div class="row justify-content-center">
        ${renderHTML}
        </div>
    </div>
</body>



</html>`
    return HTML;
}



module.exports = renderHTML;


//create the HTML

// HTML =
// //htmlTemplate ()

// const createHTMLCSS = ()