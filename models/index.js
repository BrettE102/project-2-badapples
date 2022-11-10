const User = require("./User");
const StudentCourses = require("./StudentCourses");
const Student = require("./Student");
const Course = require("./Course");

User.hasMany(Course, {
  foreignKey: "teacherId",
  onDelete: "CASCADE",
});

Course.belongsTo(User, {
  foreignKey: "teacherId",
});

Course.hasMany(StudentCourses, {
  foreignKey: "courseId",
  onDelete: "CASCADE",
});

StudentCourses.belongsTo(Course, {
  foreignKey: "courseId",
});

Student.hasMany(StudentCourses, {
  foreignKey: "studentId",
  onDelete: "CASCADE",
});

StudentCourses.belongsTo(Student, {
  foreignKey: "studentId",
});

module.exports = { User, Course, StudentCourses, Student };
