const router = require("express").Router();
const sequelize = require("../../config/connection");
const { json } = require("express");
const { User, Teacher, Student } = require("../../models");
const withAuth = require("../../utils/auth");
const { route } = require("./teacherRoutes");

// GET all students, sort by name and grade level
router.get("/", async (req, res) => {
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

    res.status(200).json(studentData);
    console.log(studentData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET a single student by id
router.get("/:id", async (req, res) => {
  try {
    const studentData = await Student.findByPk(req.params.id, {
      // JOIN with teacher
      include: [{ model: Teacher }, { model: User }],
    });

    if (!studentData) {
      res.status(404).json({ message: "No student found with this id!" });
      return;
    }

    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE student
router.post("/", async (req, res) => {
  try {
    const studentData = await Student.create(req.body);
    res.status(200).json(studentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a student by id
router.delete("/:id", async (req, res) => {
  try {
    const studentData = await Student.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!studentData) {
      res.status(404).json({ message: "No student found with this id!" });
      return;
    }

    res.status(200).json(studentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
