const browserObject = require('./browser');
const scraperController = require('./pageController');

async function scrapeVaccineAppointments(zipCode){
    //Start the browser and create a browser instance
    let browserInstance = browserObject.startBrowser();

    // Pass the browser instance to the scraper controller
    var vaccinationAppointments = scraperController(browserInstance, zipCode)

    p = Promise.resolve(vaccinationAppointments)

    p.then(vaccinationAppointments => {
        for(let vaccinationAppointment of vaccinationAppointments){
            console.log('v', vaccinationAppointment.name)
        }
    })
}

module.exports = scrapeVaccineAppointments