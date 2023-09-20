const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log("yup, classes here")
    res.send("classes ok")
})

router.get('/:id', (req, res) => {
    console.log("yup thats a class' id")
    res.send("u asked for the class id " + req.params.id)
})

module.exports = router;