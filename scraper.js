const puppeteer = require('puppeteer');

const ScrapInstagram = async (value) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://instagram.com/${value}`);
    
    const resultSelector = '.Y8-fY';
    await page.waitForSelector(resultSelector);
    
    const ScrapUser = await page.evaluate((resultSelector) => {
        
        const userImg = document.querySelector('._6q-tv').src;
        const post = document.querySelectorAll(resultSelector)[0].textContent;
        const followers = document.querySelectorAll(resultSelector)[1].textContent;
        const following = document.querySelectorAll(resultSelector)[2].textContent;
        const userName = document.querySelector('._7UhW9.fKFbl.yUEEX.KV-D4.fDxYl').textContent
        const userBio = document.querySelector('.-vDIg span').innerText;
        const name = document.querySelector('.rhpdm').textContent;

        return {following,
                userImg,
                post,
                followers,
                userName,
                userBio,
                name
            }
    }, resultSelector)



    await browser.close()
    return ScrapUser;
};

module.exports.ScrapInstagram = ScrapInstagram;

