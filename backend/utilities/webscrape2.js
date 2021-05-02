
const puppeteer = require('puppeteer');

async function getPic() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://vaccinefinder.nyc.gov/');

    await page.type('input', '10002');

    await page.click('button');

    // await page.waitForNavigation();

    console.log('New Page URL:', page.url());

    await page.waitForSelector('.App');

    //   var vaccinationSites = await page.$$('article')

    let urls = await page.$$eval('article', articles => {
        
        return articles;
    });
    console.log(urls);





    //   await browser.close();
}

getPic();

const scraperObject = {
    url: 'http://books.toscrape.com',
    async scraper(browser) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
        // Wait for the required DOM to be rendered
        await page.waitForSelector('.page_inner');
        // Get the link to all the required books
        let urls = await page.$$eval('section ol > li', links => {
            // Make sure the book to be scraped is in stock
            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== "In stock")
            // Extract the links from the data
            links = links.map(el => el.querySelector('h3 > a').href)
            return links;
        });
        console.log(urls);
    }
}

