const Manager = require('../lib/Manager.js')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


const generateManagerCards = managerArray => {
    for (i in managerArray) {
        return `
        <h2> I am a manager <h2>`
    }
}


const generateHTML = employeeArray => {

const engineerArray = employeeArray.filter(employee => employee.role ==="Engineer");
const managerArray = employeeArray.filter(employee => employee.role ==="Intern");
const internArray = employeeArray.filter(employee => employee.role ==="Manager");


return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Portfolio Generator</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <My Team>
  </header>

  <main class="container my-5">
    ${generateManagerCards(managerArray)}
  </main>

  
</body>
</html>

`;

};



module.exports = generateHTML;