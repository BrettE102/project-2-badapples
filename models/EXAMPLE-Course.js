const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Course extends Model {}

Course.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gradeLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: "course",
});

module.exports = Course;
