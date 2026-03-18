import { data } from './data.mjs'

export var logic = {
    registerUser: function (name, email, username, password) {
        // TODO improve input validations
        if (name === '') throw new Error('name is empty')
        if (email === '') throw new Error('email is empty')
        if (username === '') throw new Error('username is empty')
        if (password === '') throw new Error('password is empty')

        var user = data.findUserByEmail(email)

        if (user) throw new Error('user with email already exists')

        user = data.findUserByUsername(username)

        if (user) throw new Error('user with username already exists')

        // TODO use constructor function UserData
        user = {
            name: name,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    },

    loginUser: function (username, password) {
        // TODO implement me
    }
}