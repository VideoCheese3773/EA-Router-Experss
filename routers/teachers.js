const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("yup, teachers here")
    res.send("teachers ok")
})

router.get('/:id', (req, res) => {
    console.log("yup thats a teacher's id")
    res.send("u asked for the teacher id " + req.params.id)
})

module.exports = router;