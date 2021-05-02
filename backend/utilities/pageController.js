const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance, zipCode){
    let browser;
    try{
        browser = await browserInstance;
        let vaccinationAppointments = await pageScraper.scraper(browser, zipCode);
        return vaccinationAppointments
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance, zipCode) => scrapeAll(browserInstance, zipCode)