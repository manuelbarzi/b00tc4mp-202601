import fs from 'fs/promises'

export const data = {
    insertUser: function (user) {
        user.id = 'ID' + Math.random().toString().slice(2)

        return fs.readFile('users.json', 'utf-8')
            .catch(error => { throw new Error('Error reading users.json file: ' + error.message) })
            .then(usersJSON => {
                const users = JSON.parse(usersJSON)

                users.push(user)

                return fs.writeFile('users.json', JSON.stringify(users, null, 2))
                    .catch(error => { throw new Error('Error writing to users.json file: ' + error.message) })
                    .then(() => user)
            })
    },

    findUserByEmail: function (email) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.email === email
        }) || null

        return user
    },

    findUserByUsername: function (username) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.username === username
        }) || null

        return user
    },

    findUserById: function (userId) {
        const usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        return user
    },

    updateUserName: function (userId, name) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) {
            user.name = name

            usersJSON = JSON.stringify(users, null, 2)
            fs.writeFileSync('users.json', usersJSON)
        }
    },

    updateUserEmail: function (userId, email) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) {
            user.email = email

            usersJSON = JSON.stringify(users, null, 2)
            fs.writeFileSync('users.json', usersJSON)
        }
    },

    updateUserPassword: function (userId, newPassword) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) {
            user.password = newPassword

            usersJSON = JSON.stringify(users, null, 2)
            fs.writeFileSync('users.json', usersJSON)
        }
    },

    updateUserUsername: function (userId, username) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const user = users.find(function (user) {
            return user.id === userId
        }) || null

        if (user) {
            user.username = username

            usersJSON = JSON.stringify(users, null, 2)
            fs.writeFileSync('users.json', usersJSON)
        }
    },

    deleteUserById: function (userId) {
        let usersJSON = fs.readFileSync('users.json', 'utf-8')
        const users = JSON.parse(usersJSON)

        const userIndex = users.findIndex(function (user) {
            return user.id === userId
        })

        if (userIndex !== -1) {
            users.splice(userIndex, 1)

            usersJSON = JSON.stringify(users, null, 2)
            fs.writeFileSync('users.json', usersJSON)
        }
    }
}