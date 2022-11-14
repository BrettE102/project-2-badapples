// requiring sequelize

// Set params for students

// export students model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Student extends Model {}

Student.init(
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
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "teacher",
        key: "id",
      },
    },
    mathScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    scienceScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    laScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "student",
  }
);

module.exports = Student;
