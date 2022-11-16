const router = require("express").Router();
const {User, Student, Teacher} = require("../models");
const withAuth = require("../utils/auth");
const sequelize = require("../config/connection");

// Use withAuth middleware to prevent access to route
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: User }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/teachers");
    return;
  }
  res.render("login");
});

router.get("/classroom", async (req, res) => {
  try {
    const studentData = await Student.findAll({
      include: [{ model: Teacher }],
      order: [["name", "ASC"]],
      attributes: {
        include: [
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              "(SELECT AVG(math_score) FROM student WHERE student.teacher_id = teacher.id)"
            ),
            "averageMath",
            // console.log(averageMath),
          ],
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              "(SELECT AVG(science_score) FROM student WHERE student.teacher_id = teacher.id)"
            ),
            "averageScience",
          ],
          [
            // Use plain SQL to add up the total mileage
            sequelize.literal(
              "(SELECT AVG(la_score) FROM student WHERE student.teacher_id = teacher.id)"
            ),
            "averageLa",
          ],
        ],
      },
    });

    const students = studentData.map(student => student.get({
      plain: true
    }));
    console.log(students);

    res.render("classroom", {students});
    console.log(studentData);

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET all teachers and sort by ascendiing order
router.get("/teachers", async (req, res) => {
  try {
    const teacherData = await Teacher.findAll({
      order: [
        ["gradeLevel", "DESC"],
        ["name", "ASC"],
      ],
    });

    const teachers = teacherData.map(teacher => teacher.get({
      plain: true
    }));
    console.log(teacher);

    res.render("teachers", {teachers});
    console.log(teacherData);

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
