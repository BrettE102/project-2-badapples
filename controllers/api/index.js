const router = require("express").Router();
const { Course, StudentCourses, Student } = require("../../models");
const withAuth = require("../../utils/auth");

// require routes (teacher, student, subject etc)

// router.use(each route)

module.exports = router;