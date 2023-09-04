const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class employees extends Model {}

employees.init(
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            autoIncrement: false, 
        },
        employee_first_name: {
            type: DataTypes.VARCHAR
        },
        employee_last_name: {
            type: DataTypes.VARCHAR
        },
        employee_role_id: {
            type: DataTypes.INTEGER
        },
        employee_manager_id: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employees'
    }
),

module.exports = employees;