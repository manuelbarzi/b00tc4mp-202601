import { data } from './data.mjs'

export var logic = {
    registerUser: function(name, email, username, password) {
        // TODO check if user already exists
        /*
        var user = data.findUserByEmail(email)

        if (user) throw new Error('user already exists')

        user = data.findUserByUsername(username)

        if (user) throw new Error('user already exists')
        */

        var user = {
            name: name,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    },

    loginUser: function(username, password) {
        // TODO implement me
    }
}