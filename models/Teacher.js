// requiring sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Teacher extends Model {}

// Setting parameter rules for teachers
Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gradeLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    classroom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "teacher",
  }
);

module.exports = Teacher;
