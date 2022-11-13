const sequelize = require('../config/connection');
const { Student, Teacher, User } = require('../models');

const teacherSeedData = require('./teacherData.json');
const studentSeedData = require('./studentData.');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const teachers = await Teacher.bulkCreate(teacherSeedData);
  const students = await Student.bulkCreate(studentSeedData);

  process.exit(0);
};

seedDatabase();