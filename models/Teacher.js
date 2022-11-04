// requiring sequelize 
const { Model, DataTypes } = require('sequelize');

class Teacher extends Model {}

// Setting parameter rules for teachers
Teacher.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
)

module.exports = Teacher