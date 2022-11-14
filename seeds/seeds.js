const sequelize = require("../config/connection");
const { Student, Teacher } = require("../models");

const teacherSeedData = require("./teacherData.json");
const studentSeedData = require("./studentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const teacher = await Teacher.bulkCreate(teacherSeedData);
  const student = await Student.bulkCreate(studentSeedData);

  process.exit(0);
};

seedDatabase();
