var mongoose = require('mongoose')

const vaccineSiteSchema = new mongoose.Schema({
    hospitalName: String,
    address: String,
    zipCode: Number,
    vaccineAvailable: Boolean,
    vaccineType: String,
    phoneNumber: Number,
    appointmentUrl: String
})

module.exports = mongoose.model('VaccineSite', vaccineSiteSchema)