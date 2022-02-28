const inquirer = require('inquirer');

var employeeArray = [];


const promptEmployee = employeeData => {
    console.log(`
  =================
  Add a New Employee
  =================
  `);
  
    // If there's no 'projects' array property, create one
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'Please provide your employee ID',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'Please enter your email',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter your email!');
              return false;
            }
          }
        },
        {
            type: 'list',
            name: 'role',
            choices: ['Intern', 'Manager', 'Engineer']
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                  return true;
                } else {
                  console.log('You need to enter an office number!');
                  return false;
                }
            },
            when: ({role}) => role === 'Manager'
          },
          {
            type: 'input',
            name: 'school',
            message: 'What school do you attend??',
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('You need to enter a school!');
                  return false;
                }
            },
            when: ({role}) => role === 'Intern'
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('You need to enter a github username!');
                  return false;
                }
            },
            when: ({role}) => role === 'Engineer'
          },
        {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to enter another employee?',
          default: false
        }
      ])
      .then(employeeData => {
        employeeArray.push(employeeData);
        if (employeeData.confirmAddEmployee) {
          return promptEmployee(employeeData);
        } else {
          return employeeData;
        }
      });
  };


 promptEmployee();