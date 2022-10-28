const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    tel: {
        type: Number
    }
})

const Form = mongoose.model('Form', FormSchema)

module.exports = { Form }