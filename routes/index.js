const inquirer = require('inquirer');

async function mainMenu() {
    const answer = await inquirer.prompt([
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
    ]);

}