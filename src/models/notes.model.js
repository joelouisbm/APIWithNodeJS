const mongoose = require('mongoose')
const Schema = mongoose.Schema

let notesSchema = new Schema({
    note: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
}, { versionKey: false })

let notesModel = mongoose.model('notes', notesSchema)
module.exports = notesModel