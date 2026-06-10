import { data } from './data.mjs'

export const logic = {
    registerUser: function (name, email, username, password, passwordRepeat) {
        // TODO improve input validations
        if (name.trim() === '') throw new Error('name is empty')
        if (email.trim() === '') throw new Error('email is empty')
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')
        if (passwordRepeat.trim() === '') throw new Error('passwordRepeat is empty')

        if (password !== passwordRepeat) throw new Error('passwords do not match')

        let user = data.findUserByEmail(email)

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
        // TODO improve input validations
        if (username.trim() === '') throw new Error('username is empty')
        if (password.trim() === '') throw new Error('password is empty')

        const user = data.findUserByUsername(username)

        if (!user) throw new Error('user not found')

        if (user.password !== password) throw new Error('wrong password')

        data.setLoggedInUserId(user.id)
    },

    getLoggedInUserName: function() {
        const userId = data.getLoggedInUserId()

        const user = data.findUserById(userId)

        return user.name
    },

    logoutUser: function() {
        data.setLoggedInUserId(null)
    },

    modifyUserName: function(name) {
        const userId = data.getLoggedInUserId()

        data.updateUserName(userId, name)
    },

    modifyUserEmail: function(email) {
        const userId = data.getLoggedInUserId()

        data.updateUserEmail(userId, email)
    }
}

