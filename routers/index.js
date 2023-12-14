const express = require('express')
const router = express.Router()
const StudentController = require('../controllers/student')
const MajorController = require('../controllers/major')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/students', StudentController.showAllStudents)
router.get('/students/add', StudentController.showAddStudent)
router.get('/students/:id', StudentController.showOneStudent)
router.post('/students/add', StudentController.addStudent)
router.get('/students/edit/:id', StudentController.showEditStudent)
router.post('/students/edit/:id', StudentController.editStudent)
router.get('/students/delete/:id', StudentController.deleteStudent)


router.get('/majors', MajorController.showAllMajors)


module.exports = router