const db = require('./config/connection');
const inquirer = require('inquirer');

db.connect((err) => {
    if(err) {throw err}
    mainMenu();
})

function mainMenu() {
     inquirer.prompt([
        {
            type: 'list',
            name: 'menuChoice',
            message: 'What would you like to do?',
            choices: [
             'View all departments',
             'View all roles',
             'View all employees',
             'Add a department',
             'Add a role',
             'Add an employee',
             'Update an employee role',
             'Exit'
           ],
        },
    ]) .then((answers) => {
        console.log(answers);
    })

}