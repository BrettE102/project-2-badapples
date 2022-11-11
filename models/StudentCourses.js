// requiring sequelize
const { Model, DataTypes } = require("sequelize");

class StudentCourses extends Model {}

// Setting parameter rules for teachers
StudentCourses.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "course",
      key: "id",
    },
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "student",
      key: "id",
    },
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sequelize,
  timestamps: false,
  underscored: true,
  modelName: "studentCourses",
});

module.exports = StudentCourses;
