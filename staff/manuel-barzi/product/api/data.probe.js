import { data } from './data.js'

// insert a user

data.insertUser({
    name: 'Manuel Barzi',
    email: 'manuel.barzi@example.com',
    username: 'manuel',
    password: '123123123'
})

// insert a user

data.insertUser({
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    password: '123123123'
})

// find a user by email

const userByEmail = data.findUserByEmail('manuel.barzi@example.com')
console.log(userByEmail)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// find a user by username

const userByUsername = data.findUserByUsername('johndoe')
console.log(userByUsername)
// { name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe', password: '123123123', id: 'ID7849513284636278' }

// find a user by id

const userById = data.findUserById('ID8765902459775687')
console.log(userById)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// update a user's name

data.updateUserName('ID8765902459775687', 'Manuel Barzi Updated')