const scraperObject = {
    url: 'https://vaccinefinder.nyc.gov/',
    async scraper(browser){
        let page = await browser.newPage();

        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);

        const navigationPromise = page.waitForNavigation({ waitUntil: ['networkidle2'] })

        await page.type('input', '10002');
    
        await page.click('button');

        await navigationPromise

        const articles = await page.$$("section > article");

        for( let article of articles ) {
            let vaccinationSite = {
                name: "",
                phoneNumber: "",
                scheduleByPhoneOnly: false,
                directionsUrl: "",
                vaccine: ""
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
                    }else{
                        vaccinationSite.appointmentUrl = href
                    }
                }else if(i == 1){
                    vaccinationSite.directionsUrl = href
                }

            }


            const vaccineElement = await article.$("ol li span")
            const vaccine = await page.evaluate(el => el.innerText, vaccineElement)
            vaccinationSite.vaccine = vaccine

        }

        console.log(Object.keys(vaccinationSite), "done")

    }
}

function isPhoneNumber(string){
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return string.match(regex)
}

module.exports = scraperObject;