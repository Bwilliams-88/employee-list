INSERT INTO department (id, department_name)
VALUES (001, "Engineering"),
       (002, "Finance"),
       (003, "Legal"),
       (004, "Sales");

SELECT * FROM department;

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Sales Lead", "100000", "004"),
       (002, "Salesperson", "80000", "004"),
       (003, "Lead Engineer", "150000", "001"),
       (004, "Software Engineer", "120000", "001"),
       (005, "Account Manager", "160000", "002"),
       (006, "Accountant", "125000", "002"),
       (007, "Legal Team Lead", "250000", "003"),
       (008, "Lawyer", "190000", "003");

SELECT * FROM role;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Frodo", "Baggins", "001", NULL),
       (002, "Luke", "Skywalker", "003", "001"),
       (003, "Jim", "Hopper", "005", NULL),
       (004, "Will", "Byers", "007", 003),
       (005, "Bugs", "Bunny", "002", NULL),
       (006, "Tom", "TheCat", "004", 005),
       (007, "Jerry", "TheMouse", "006", NULL),
       (008, "Bruce", "Wayne", "008", 007);

SELECT * FROM employee;