const PORT = 8000
const express = require("express")
const cheerio = require("cheerio")
const axios = require("axios")

const app = express()

url = 'https://www.theguardian.com/us'

axios(url)
.then(response => {
    const html = response.data
    // console.log(html)
    const $ = cheerio.load(html)
    const articles = [];

    
    $('.fc-item__title', html).each(function() {
        const title = $(this).text()
        const url = $(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))
