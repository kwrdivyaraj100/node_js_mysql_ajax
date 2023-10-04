const express = require('express');

const { homePage, insertValues } = require('../controllers/students-controllers.js');

const studentRouter = express.Router();

studentRouter.get('/', homePage);
studentRouter.post('/', insertValues);


module.exports = studentRouter;