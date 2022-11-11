
const router = require('express').Router();
const { Teacher } = require('../../models')

// post route, try/catch on all routes

// findOne route


module.exports = router;

const router = require("express").Router();
const { Course, StudentCourses, Student } = require("../../models");
const withAuth = require("../../utils/auth");

