const express = require("express")
const router = express.Router()
const VaccineSite = require("../models/VaccineSite")

// webscrape from nyc vaccine finder
const webScrapeVaccineSitesForZip = require('../utilities/webscrape')

// router.get("/locations", (req, res) => {
    // var { zipCode } = req.query
    let locations = webScrapeVaccineSitesForZip("10002")
    p = Promise.resolve(locations)

    p.then(locations => locations.map(location => {
        console.log(location.name)
    }))

// })

router.get("/", (req, res) => {
    var { hospitalName } = req.query
    console.log('z', hospitalName)
    VaccineSite.findOne({ hospitalName: hospitalName }, (err, vaccineSite) => {
        //if vaccineSite already exists in database
        if (!vaccineSite) {
            res.send({
                success: false,
                message: "Vaccine Site does not exist"
            })
            
        } else{
            console.log(vaccineSite)
            var { address, zipCode, vaccineAvailable, phoneNumber, appointmentUrl, direction} = vaccineSite

            res.send({
                success: true,
                message: "Vaccine Site found",
                address, 
                zipCode, 
                vaccineAvailable, 
                phoneNumber, 
                appointmentUrl,
                direction
            })
        }
    })
})


router.post("/", (req, res) => {
    var { hospitalName, address, zipCode, vaccineAvailable, vaccineType, phoneNumber, appointmentUrl, direction } = req.body

    const vaccineSite = new VaccineSite({
        hospitalName: hospitalName,
        address: address,
        zipCode: zipCode,
        vaccineAvailable: vaccineAvailable,
        vaccineType: vaccineType,
        phoneNumber: phoneNumber,
        appointmentUrl: appointmentUrl,
        direction: string
    })

    VaccineSite.find({ hospitalName: hospitalName }, (err, vaccineSites) => {
        //if vaccineSite already exists in database
        if (vaccineSites.length) {
            res.send({
                success: false,
                message: "VaccineSite already exists"
            })
        } else {
            //add the vaccineSite to the db
            vaccineSite.save((err) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send({
                        success: true,
                        message: "VaccineSite successfully added"
                    })
                }
            })
        }
    })
})

module.exports = router