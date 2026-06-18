import fs from 'fs'

export const data = {
    insertUser: function(user) {
        user.id = 'ID' + Math.random().toString().slice(2)

        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        users.push(user)

        usersJSON = JSON.stringify(users, null, 2)
        fs.writeFileSync('users.json', usersJSON)
    },

    findUserByEmail: function(email) {
        return users.find(function(user) {
            return user.email === email
        }) || null
    },

    findUserByUsername: function(username) {
        return users.find(function(user) {
            return user.username === username
        }) || null
    },

    findUserById: function(userId) {
        return users.find(function(user) {
            return user.id === userId
        }) || null
    },

    updateUserName: function(userId, name) {
        const user = users.find(function(user) {
            return user.id === userId
        }) || null

        if (user) user.name = name
    },

    updateUserEmail: function(userId, email) {
        const user = users.find(function(user) {
            return user.id === userId
        }) || null

        if (user) user.email = email
    }
}