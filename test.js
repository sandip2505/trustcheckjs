const validate = require('./index');

async function validateNotEmpty() {
    const email = await validate.validateURL('https://github.com/Anuj-Kumar-Sharma/cs-currency-converter/blob/mastjjer/index.js')
    console.log("validate", email)
}
validateNotEmpty()