const Manager = require('../lib/Manager.js')
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

var employeeCards = [''];

//function to create manager cards
const generateEmployeeCards = employee => {
   
        return `
        <div class = "card  justify-content-center text-center" style="width: 18rem;">
          <div class = "card-body ">
            <h5 class = "card-title name text-center">${employee.name}</h5>            
            <p class = "card-text ${employee.role} role text-center"> ${employee.role}</p>
            <p class = "card-text id text-center"> Employee ID: ${employee.id} </p>
            ${officeGithubSchool(employee)}
             <a href="mailto: ${employee.email}" class="btn btn-primary email">Email: ${employee.email}</a>
            
            </div>


        </div>
        `
    
}

///get school, office number or github based on role
const officeGithubSchool = employee => {
  if (employee.role === "Manager") {
    return `
    <p class = card-text office-number text-center> Office Number: ${employee.officeNumber} </p>
    `
  }
  if (employee.role === "Engineer") {
    return `
    <p>
    <a href="http://github.com/${employee.github}" class="btn btn-primary ">Github is ${employee.github}</a>
    </p>
    `
  }

  if(employee.role === "Intern") {
    return `
    <p class = "card-text school text-center"> Inter School: ${employee.school} </p>

    `
  }
  
}

//function to seperate employee array by role and send to createCards
const loopArray = employeeArray => {
const engineerArray = employeeArray.filter(employee => employee.role ==="Engineer");
const internArray = employeeArray.filter(employee => employee.role ==="Intern");
const managerArray = employeeArray.filter(employee => employee.role ==="Manager");

for (let i=0; i< managerArray.length; i++) {
  var employee = managerArray[0]
  manager = new Manager(employee.name, employee.id, employee.email, employee.role, employee.officeNumber)
  if (manager) {
  employeeCards.push(generateEmployeeCards (manager));
  }
}
///generate engineer cards
for (let i=0; i< engineerArray.length; i++) {
  var employee = engineerArray[0]
  engineer = new Engineer(employee.name, employee.id, employee.email, employee.role, employee.github)
  if (engineer) {
  employeeCards.push(generateEmployeeCards (engineer));
  }
}
//generate intern cards
for (let i=0; i< internArray.length; i++) {
  var employee = internArray[0]
  intern = new Intern(employee.name, employee.id, employee.email, employee.role, employee.school)
  if (intern) {
  employeeCards.push(generateEmployeeCards (intern));
  }
}

return employeeCards;
}



const generateHTML = employeeArray => {

return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Portfolio Generator</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class = "d-flex justify-content-center bg-dark text-light" >
    My Team
  </header>

  <main class="container d-flex flex-wrap my-5">
    ${loopArray(employeeArray)}
    
  </main>

  
</body>
</html>

`;

};



module.exports = generateHTML;