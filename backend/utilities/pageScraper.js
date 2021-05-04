const scraperObject = {
    url: 'https://vaccinefinder.nyc.gov/',
    async scraper(browser, zipCode){
        let page = await browser.newPage();

        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);

        const navigationPromise = page.waitForNavigation({ waitUntil: ['networkidle2'] })

        await page.type('input', zipCode);
    
        await page.click('button');

        await navigationPromise

        const articles = await page.$$("section > article");

        let vaccinationSites = []

        // only queries first 10 articles to improve response time
        for( i=0; i < 10; i++ ) {
            article = articles[i]
        // for( let article of articles ) {
            let vaccinationSite = {
                name: "",
                phoneNumber: "",
                scheduleByPhoneOnly: false,
                directionsUrl: "",
                vaccine: "",
                appointmentUrl: ""
            }

            const nameAddress = await page.evaluate(el => el.getAttribute("aria-label"), article);
            vaccinationSite.name = nameAddress.split("at")[0]

            const paragraphs = await article.$$("div > div > p")
            for(let p of paragraphs){
                let string = await page.evaluate(el => el.innerText, p)

                if(isPhoneNumber(string)){
                    vaccinationSite.phoneNumber = string
                }
            }

            let address = paragraphs[0]
            vaccinationSite.address = address

            let vaccineMessage = paragraphs[paragraphs.length - 1]
            vaccinationSite.vaccineMessage = vaccineMessage

            const links = await article.$$("article > a")

            let j = 0
            for(let i = 0; i < links.length; i++){
                l = links[i]
                const href = await page.evaluate(el => el.href, l)
                const innerText = await page.evaluate(el => el.innerText, l)

                if(i == 0){
                    const scheduleByPhoneOnly = innerText == "Call for appointment"
                    if(scheduleByPhoneOnly){
                        vaccinationSite.scheduleByPhoneOnly = true
                    }
        
                    vaccinationSite.appointmentUrl = href    
                    
                }else if(i == 1){
                    vaccinationSite.directionsUrl = href
                }

            }

            const vaccineElement = await article.$("ol li span")
            const vaccine = await page.evaluate(el => el.innerText, vaccineElement)
            vaccinationSite.vaccine = vaccine

            vaccinationSites.push(vaccinationSite)
        }

        return vaccinationSites
    }
}

function isPhoneNumber(string){
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return string.match(regex)
}

module.exports = scraperObject;