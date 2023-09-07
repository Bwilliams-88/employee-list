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
            switch (answers.menuChoice) {
            case 'View all departments':
                    db.connect((err) => {
                        if (err) {
                            console.error('Error connecting to MySQL:', err);
                            return;
                          }
                          console.log('Connected to MySQL database');
                    })
                    db.query('SELECT * FROM department', (err, results, fields) => {
                        if (err) {
                          console.error('Error executing query:', err);
                          return;
                        }
                        // Process the query results
                        console.table(results)});
                break;
            
            case 'View all roles':
                // run some code
                break;

            case 'View all employees':
                // run some code
                break;
            case 'Add a department':
                // run some code
                break;
            
            case 'Add a role':
                // run some code
                break;

            case 'Add an employee':
                // run some code
                break;

            case 'Update an employee role':
                // run some code
                break;
            
            case 'Exit':
                // run some code
                process.exit();
            
        }}

)
}