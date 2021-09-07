const express = require('express')
const CONFIG = require('./config/config')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// Settings and DB Connection 
const cnn = require('./config/db.config')

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/notes', require('./routes/notes.router.js'))

// Listening
app.listen(CONFIG.PORT, () => {
    console.log(`server running on port ${CONFIG.PORT}`)
})