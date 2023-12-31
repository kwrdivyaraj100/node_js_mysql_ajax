const express = require('express');

const { homePage, insertValues, getStudent, deleteStudents, updateStudents, updateStudentsDetails, searchStudents, searchStudentsDetails } = require('../controllers/students-controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/', insertValues);
studentRouter.get('/student', getStudent);
studentRouter.get('/delete-student', deleteStudents);
studentRouter.get('/update-student', updateStudents);
studentRouter.post('/update-student', updateStudentsDetails);
studentRouter.get('/search-students', searchStudents);
studentRouter.get('/searching', searchStudentsDetails);


module.exports = studentRouter;