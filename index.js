const fs = require('fs')

const frangipaniJson = fs.readFileSync(`${__dirname}/frangipani.json`, 'utf8')
const frangipani = JSON.parse(frangipaniJson)

module.exports = frangipani
