const fs = require('fs')

const file = process.argv[2]

const json = fs.readFileSync(file).toString()

const users = JSON.parse(json)

console.log(users)