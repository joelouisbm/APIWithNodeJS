const express = require('express')
const controller = require('../controllers/notes.controller')
const router = express.Router()

router.get('/', controller.find)
    .get('/:id', controller.findById)
    .post('/', controller.save)
    .delete('/:id', controller.findAndDelete)
    .put('/:id', controller.findAndUpdate)

module.exports = router