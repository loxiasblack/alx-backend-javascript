const  AppController  = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');
const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
  AppController.getHomepage(req, res);
})

route.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
})

route.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
})

module.exports = route;
