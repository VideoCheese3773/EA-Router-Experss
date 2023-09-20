const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("yup, students here")
    res.send("students ok")
})

router.get('/:id', (req, res) => {
    console.log("yup thats a student's id")
    res.send("u asked for the student id " + req.params.id)
})

module.exports = router;