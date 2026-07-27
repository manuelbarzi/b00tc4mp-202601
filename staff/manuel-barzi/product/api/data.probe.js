import { data } from './data.js'

// insert a user

data.insertUser({
    name: 'Manuel Barzi',
    email: 'manuel.barzi@example.com',
    username: 'manuel',
    password: '123123123'
})
    .then((user) => {
        console.log('User inserted:', user)
    })
    .catch((error) => {
        console.error('Error inserting user:', error)
    })

// insert a user

// data.insertUser({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     username: 'johndoe',
//     password: '123123123'
// })

// find a user by email

// const userByEmail = data.findUserByEmail('manuel.barzi@example.com')
// console.log(userByEmail)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// find a user by username

// const userByUsername = data.findUserByUsername('johndoe')
// console.log(userByUsername)
// { name: 'John Doe', email: 'john.doe@example.com', username: 'johndoe', password: '123123123', id: 'ID7849513284636278' }

// find a user by id

// const userById = data.findUserById('ID8765902459775687')
// console.log(userById)
// { name: 'Manuel Barzi', email: 'manuel.barzi@example.com', username: 'manuel', password: '123123123', id: 'ID8765902459775687' }

// update a user's name

// data.updateUserName('ID8765902459775687', 'Manuel Barzi Updated')

// update a user's password

// data.updateUserPassword('ID8765902459775687', '234234234')
// const userByIdPasswordUpdated = data.findUserById('ID8765902459775687')

//console.log(userByIdPasswordUpdated)
// { name: 'Manuel Barzi', ..., password: '234234234', ... }

// update a user's username

// data.updateUserUsername('ID8765902459775687', 'manuelbarzi')
// const userByIdUsernameUpdated = data.findUserById('ID8765902459775687')
// console.log(userByIdUsernameUpdated)
// { name: 'Manuel Barzi', ..., username: 'manuelbarzi', ... }


// delete a user by id

// data.deleteUserById('ID8442068131950731')
// const userByIdDeleted = data.findUserById('ID8442068131950731')
// console.log(userByIdDeleted)
// null