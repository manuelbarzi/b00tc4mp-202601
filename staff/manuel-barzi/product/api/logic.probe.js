import { logic } from './logic.js'
import { data } from './data.js'

// regiser user fails

// logic.registerUser('Manuel Barzi', 'manuel.barzi@example.com', 'manuelbarzi', '123123123', '123123123')
// throw Error 'user with email already exists'

// register user succeeds

// logic.registerUser('Pepito Grillo', 'pepito.grillo@example.com', 'pepitogrillo', '123123123', '123123123')
// const user = data.findUserByEmail('pepito.grillo@example.com')
// console.log(user)
// { name: 'Pepito Grillo', email: '...', ... }

// authenticate user fails

// logic.authenticateUser('manuelbarzi', 'wrongpassword')
// throw Error 'wrong password'

// authenticate user succeeds

const userId = logic.authenticateUser('manuelbarzi', '123123123')
console.log(userId)
// ID8765902459775687