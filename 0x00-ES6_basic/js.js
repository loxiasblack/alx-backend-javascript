const request = require("request");

const url = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Cheddar%20Cheese'

request.get(url, (error, response, body) => {
    if (error) {
        console.error(`${error}: access denied`)
    }
    const Cheese = JSON.parse(body)
    console.log(`${Cheese}`)
})
