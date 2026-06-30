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

// const userId = logic.authenticateUser('manuelbarzi', '123123123')
// console.log(userId)
// ID8765902459775687

// get logged in user name fails

// logic.getLoggedInUserName('ID28380303131557099')
// throw Error 'user not found'

// get logged in user name succeeds

// const userName = logic.getLoggedInUserName('ID28380303131557094')
// console.log(userName)
// Pepito Grillo

// modify user name fails

// logic.modifyUserName('ID28380303131557099', 'Pepita Grillo')
// throw Error 'user not found'

// modify user name succeeds

// logic.modifyUserName('ID28380303131557094', 'Pepita Grillo')
// const user = data.findUserById('ID28380303131557094')
// console.log(user.name)
// Pepita Grillo

// modify user email fails

// logic.modifyUserEmail('ID28380303131557099', 'pepita.grillo@example.com')
// throw Error 'user not found'

// modify user email succeeds

// logic.modifyUserEmail('ID28380303131557094', 'pepita.grillo@example.com')
// const user = data.findUserById('ID28380303131557094')
// console.log(user.email)
// pepita.grillo@example.com

// modify user username fails

// logic.modifyUserUsername('ID28380303131557099', 'pepitogrillo')
// throw Error 'user not found'

// modify user username succeeds

logic.modifyUserUsername('ID28380303131557094', 'pepitagrillo')
const user = data.findUserById('ID28380303131557094')
console.log(user.username)
// pepitagrillo

// modify user password fails

// logic.modifyUserPassword('ID28380303131557099', '123123123', '321321321', '321321321')
// throw Error 'user not found'

// logic.modifyUserPassword('ID28380303131557094', 'wrongpassword', '321321321', '321321321')
// throw Error 'wrong password'

// logic.modifyUserPassword('ID28380303131557094', '123123123', '321321321', 'wrongnewpassword')
// throw Error 'new passwords do not match'

// modify user password succeeds

// logic.modifyUserPassword('ID28380303131557094', '123123123', '321321321', '321321321')
// const user = data.findUserById('ID28380303131557094')
// console.log(user.password)
// 321321321