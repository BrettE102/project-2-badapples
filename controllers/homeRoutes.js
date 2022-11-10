const router = require("express").Router();
const { Course, Student, StudentCourses, User } = require("../models");
const withAuth = require("../utils/auth");
