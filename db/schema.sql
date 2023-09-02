DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE course_db;

CREATE TABLE department (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT NOT NULL
    FOREIGN KEY (department_id)
    REFERENCES department_id
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT
    FOREIGN KEY (role_id)
    REFERENCES role_id
    ON DELETE SET NULL
);