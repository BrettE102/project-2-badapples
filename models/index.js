const User = require("./User");
const Teacher = require("./Teacher");
const Student = require("./Student");
// const Course = require("./Course");

User.hasMany(Teacher, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Teacher.belongsTo(User, {
  foreignKey: "userId",
});

Teacher.hasMany(Student, {
  foreignKey: "teacherId",
  onDelete: "CASCADE",
});

Student.belongsTo(Teacher, {
  foreignKey: "teacherId",
});

User.hasMany(Student, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Student.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Teacher, Student };
