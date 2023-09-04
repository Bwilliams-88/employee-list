const router = require('express').Router();

const employees = require('../../models/employees');

router.post('/', (req, res) => {
    employees.create({
        id: req.body.id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        role_id: req.body.role_id,
        manager_id: req.body.manager_id
    })
    .then((newEmployee) => {
        res.json(newEmployee);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post()