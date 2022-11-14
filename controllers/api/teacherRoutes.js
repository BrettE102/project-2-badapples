const router = require("express").Router();
const { User, Student, Teacher } = require("../../models");
// const withAuth = require("../../utils/auth");

// GET all teachers and sort by ascendiing order
router.get("/", async (req, res) => {
  try {
    const teacherData = await Teacher.findAll({
      // order: [
      //   ["gradeLevel", "DSC"],
      //   ["name", "ASC"],
      // ],
    });
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single teacher
// router.get("/:id", async (req, res) => {
//   try {
//     const teacherData = await Teacher.findByPk(req.params.id);
//     if (!teacherData) {
//       res.status(404).json({ message: "No Teacher with this id!" });
//       return;
//     }
//     res.status(200).json(teacherData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// GET a single Teacher by id
router.get("/:id", async (req, res) => {
  try {
    const teacherData = await Teacher.findByPk(req.params.id, {
      // JOIN with Student
      include: [{ model: Student }, { model: User }],
    });

    if (!teacherData) {
      res.status(404).json({ message: "No teacher found with this id!" });
      return;
    }

    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Teacher
router.post("/", async (req, res) => {
  try {
    const teacherData = await Teacher.create(req.body);
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Teacher by id
router.delete("/:id", async (req, res) => {
  try {
    const teacherData = await Teacher.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!teacherData) {
      res.status(404).json({ message: "No Teacher found with that id!" });
      return;
    }

    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// post route, try/catch on all routes

// findOne route

module.exports = router;
