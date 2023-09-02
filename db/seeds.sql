INSERT INTO department (id, department_name)
VALUES (001, "Engineering"),
       (002, "Finance"),
       (003, "Legal"),
       (004, "Sales");

SELECT * FROM department;

INSERT INTO roles (id, title, salary, department_id),
VALUES (001, "Sales Lead", "100000", "004"),
       (002, "Salesperson", "80000", "004"),
       (003, "Lead Engineer", "150000", "001"),
       (004, "Software Engineer", "120000", "001"),
       (005, "Account Manager", "160000", "002"),
       (006, "Accountant", "125000", "002"),
       (007, "Legal Team Lead", "250000", "003"),
       (008, "Lawyer", "190000", "003"),
       (009, "Sales Lead", "100000", "004");

SELECT * FROM roles;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Frodo", "Baggins", "001", false),
       (002, "Luke", "Skywalker", "003", true),
       (003, "Jim", "Hopper", "005", true),
       (004, "Will", "Byers", "007", false),
       (005, "Bugs", "Bunny", "009", false),
       (006, "Tom", "TheCat", "002", false),
       (007, "Jerry", "TheMouse", "004", false),
       (008, "Bruce", "Wayne", "006", false),
       (009, "Harvey", "Dent", "008", false);

SELECT * FROM employee;