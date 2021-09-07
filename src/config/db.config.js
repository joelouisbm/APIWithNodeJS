const mongoose = require('mongoose')
const CONFIG = require('./config')

const cnn = mongoose.connect(CONFIG.DB_URL)
    .then((db) => {
        console.log(`DB is Connected!`)
    })
    .catch((err) => {
        console.log({
            message: `error of connection with DB`,
            err: err
        })
    })

module.exports = cnn