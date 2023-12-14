const Student = require('../models').Student
const Major = require('../models').Major

class MajorController {
    static showAllMajors(req, res) {
        Major.findAll()
        .then((majors) => {
            res.render('major', {majors})
        })
        .catch((err) => {
            res.render('error', {error: err.message})
        });
    }
}

module.exports = MajorController