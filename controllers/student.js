const Student = require('../models').Student
const Major = require('../models').Major

class StudentController {
    static showAllStudents(req, res) {
        Student.findAll({
            include: {
                model: Major,
                as: 'major',
            }
        })
        .then((students) => {
            res.render('student', {students})
        })
        .catch((err) => {
            res.render('error', {error: err.message})
        });
    }

    static showOneStudent(req, res) {
        Student.findByPk(req.params.id, {
            include: {
                model: Major,
                as: 'major',
            }
        })
        .then(student => {
            res.render('detailStudent', {student})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static showAddStudent(req, res) {
        res.render('addStudent')
    }

    static addStudent(req, res) {
        const newStudent = {
            name: req.body.name,
            email: req.body.email,
            birthDate: new Date(req.body.birthDate),
            address: req.body.address,
            majorId: Number(req.body.majorId),
        }
        Student.create(newStudent)
        .then(student => {
            res.redirect('/students')
        })
        .catch(err => {
            res.render('error', {error: err.message})
        }) 
    }

    static showEditStudent(req, res) {
        Student.findByPk(req.params.id)
        .then(student => {
            res.render('editStudent', {student})
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static editStudent(req, res) {
        Student.update(req.body, {
            where: {
                id: req.params.id
            },
            returning: true
        })
        .then(result => {
            res.redirect('/students')
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }

    static deleteStudent(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(product => {
            res.redirect('/students')
        })
        .catch(err => {
            res.render('error', {error: err.message})
        })
    }
}

module.exports = StudentController