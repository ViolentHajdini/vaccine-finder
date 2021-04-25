var mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    password: String,
    email: String,
    address: String,
    zipCode: Number,
    dateOfBirth: Date
})

module.exports = mongoose.model('User', userSchema)