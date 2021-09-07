const notes = require('../models/notes.model')

const find = async (req, res) => {
    try {
        const result = await notes.find()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({
            message: 'error getting the notes',
            error: error
        })
    }
}

const findById = async (req, res) => {
    try {
        const { id } = req.params
        const note = await notes.findById(id)
        res.status(200).send(note)
    } catch (error) {
        res.status(401).send({
            message: 'error find note!',
            error: error
        })
    }
}

const save = async (req, res) => {
    try {
        const note = req.body
        const result = await notes.insertMany([note])
        res.status(201).send({
            message: 'Note saved!',
            result: result
        })
    } catch (error) {
        res.status(500).send({
            message: 'error saving note',
            error: error
        })
    }
}

const findAndDelete = async (req, res) => {
    try {
        const { id } = req.params
        const result = await notes.findByIdAndDelete(id)
        res.status(200).send({
            message: 'note has deleted',
            result: result
        })
    } catch (error) {
        res.status(500).send({
            message: 'error when deleting the note ',
            error: error
        })
    }
}

const findAndUpdate = async (req, res) => {
    try {
        const { id } = req.params
        const newNote = req.body        
        const result = await notes.findByIdAndUpdate(id, newNote)
        res.status(401).send({
            message: 'Note Updated!',
            result: result
        })
    } catch (error) {
        res.status(500).send({
            message: 'error updating note',
            error: error
        })
    }
}

module.exports = {
    find,
    findById,
    save,
    findAndDelete,
    findAndUpdate
}