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
                queryData('SELECT * FROM department');

                break;                          
            case 'View all roles':
                queryData('SELECT * FROM role');

                break;
            case 'View all employees':
                queryData('SELECT * FROM employee');

                break;
            case 'Add a department':
                inquirer.prompt ([               
                {
                    type: 'input',
                    name: 'newDepartment',
                    message: 'What is the name of the Department you are wanting to add?',
                }
                ])
                .then((data) => {                    
                    db.connect((err) => {
                        if (err) {
                            console.error('Error connecting to MySQL database', err);
                            return;
                        }
                        console.log('Department added successfully!');
                    })
                    const values = [data.newDepartment];
                    db.query('INSERT INTO department (department_name) VALUES (?)', values, (err, results, fields) => {
                        if (err) {
                            console.error('Error added department:', err);
                        }
                        mainMenu();
                    });
                })
                break;
            
            case 'Add a role':
                inquirer.prompt ([               
                    {
                        type: 'input',
                        name: 'newRole',
                        message: 'What is the title of the Role you are wanting to add?',
                    },
                    {
                        type: 'input',
                        name: 'salary',
                        message: 'What is the salary of the added role?'
                    },
                    {
                        type: 'list',
                        name: 'department',
                        message: 'What department does the new role belong to?',
                        choices: [
                            'Engineering',
                            'Finance',
                            'Legal',
                            'Sales'
                        ],
                    },
                    ])
                    .then((data) => {                    
                        db.connect((err) => {
                            if (err) {
                                console.error('Error connecting to MySQL database', err);
                                return;
                            }
                            console.log('Role added successfully!');
                        })
                        db.query(`SELECT id FROM department WHERE department_name = '${data.department}'`, (err, results) => {
                            const values = [data.newRole, data.salary, results[0].id]
                            db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', values, (err, results) => {
                                if (err) {
                                    console.error('Error adding new role:', err);
                                }                        
                        });
                        mainMenu();
                        });                       
                    })
                break;

            case 'Add an employee':
                inquirer.prompt ([               
                    {
                        type: 'confirm',
                        name: 'newEmployee',
                        message: 'Would you like to add a new employee?',
                    },
                    {
                        type: 'input',
                        name: 'firstName',
                        message: 'What is the employees first name?',
                    },
                    {
                        type: 'input',
                        name: 'lastName',
                        message: 'What is the employees last name?',
                    },
                    {
                        type: 'list',
                        name: 'employeeRole',
                        message: 'What department does this employee belong to?',
                        choices: ['Engineering','Finance','Legal','Sales',],
                    },
                    {
                        type: 'input',
                        name: 'isManager',
                        message: 'Is the employee a manager of assigned department?',
                    },
                    ])                   
                    .then((data) => {                    
                        db.connect((err) => {
                            if (err) {
                                console.error('Error connecting to MySQL database', err);
                                return;
                            }
                            console.log('Employee added successfully!');
                        })
                        // console.log(data.employeeRole);
                        db.query(`SELECT id FROM department WHERE department_name = '${data.employeeRole}'`, (err, results) => {
                            // console.log(results[0]);
                        const values = [data.firstName, data.lastName, results[0].id, null];
                        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', values, (err, results, fields) => {
                            if (err) {
                                console.error('Error adding new employee:', err);
                            }
                            mainMenu();
                        });
                    })
                    
                });
                break;

            case 'Update an employee role':
                const choices = [];
                connection.query('SELECT name FROM employee', (err, results) => {
                    if (err) {
                        console.log('Error querying MySQL:', err);
                        return;
                    }
                    results.forEach((row) => {
                        choices.push({
                            name: row.name,
                            value: row.id,
                        });
                    });
                })
                connection.end()
                
                inquirer.prompt ([
                    {
                        type: 'list',
                        name: 'selecteddItem',
                    }
                ])
                db.query(`UPDATE employee SET role_id = ${results[0].id} WHERE id`, (err, results) => {
                    console.log(results[0]);              
                });
                break;
            
            case 'Exit':
                process.exit();
            
        }}

)
}

function queryData(str){
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL database', err);
            return;
        }
        console.log('Connected to MySQL database');
    })
    db.query(str, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
        }
        console.table(results);
        mainMenu();
    });
}