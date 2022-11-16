const router = require("express").Router();
const { User, Student, Teacher } = require("../../models");
const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// GET a single Teacher by id, will also be route for classroom
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

//Update a Teacher
router.put("/:id", async (req, res) => {
  try {
    const teacherData = await Teacher.update(
      {
        name: req.body.name,
        classroom: req.body.name,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (!teacherData) {
      res.status(404).json({ message: "No teacher found with this id!" });
      return;
    }
    res.status(200).json(teacherData);
  } catch (err) {
    res.status(500).json(err);
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

module.exports = router;
