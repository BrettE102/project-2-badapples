const router = require("express").Router();
// require routes (teacher, student, user)
const teacherRoutes = require("./teacherRoutes");
const studentRoutes = require("./studentRoutes");
const userRoutes = require("./userRoutes");

// router.use(each route)
router.use('/students', studentRoutes);
router.use('/teachers', teacherRoutes);
router.use('/users', userRoutes)

module.exports = router;
