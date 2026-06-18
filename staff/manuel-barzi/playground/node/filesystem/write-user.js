const fs = require('fs')

const file = process.argv[2]
const userJSON = process.argv[3]

// TODO read json from file
let usersJSON = fs.readFileSync(file, 'utf8')

// TODO parse json to users (array of objects)
const users = JSON.parse(usersJSON)

// TODO convert user json to object (user)
const user = JSON.parse(userJSON)

// TODO push user in users
users.push(user)

// TODO convert users to json
usersJSON = JSON.stringify(users, null, 2)

// TODO write json in file
fs.writeFileSync(file, usersJSON, 'utf8')

// example usage: node write-user.js users.json '{"name":"John Doe","email":"john.doe@example.com","password":"123123123"}'