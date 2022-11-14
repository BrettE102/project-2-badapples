const sequelize = require("../config/connection");
const { Student, Teacher, User } = require("../models");

const teacherSeedData = require("./teacherData.json");
const studentSeedData = require("./studentData.json");

const seedDatabase = async () => {
  await Student.drop();
  console.log("student table dropped!");
  await sequelize.sync({ force: true });

  // const teacher = await Teacher.bulkCreate(teacherSeedData);
  // const student = await Student.bulkCreate(studentSeedData);

  process.exit(0);
};

seedDatabase();
