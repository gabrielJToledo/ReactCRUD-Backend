const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('')

db.on("error", () => { console.log('Error connection!')})

db.once("open", () => { console.log("Success")})

module.exports = app => { mongoose }