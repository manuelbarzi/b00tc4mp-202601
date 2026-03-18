var users = []

export var data = {
    insertUser: function(user) {
        users.push(user)
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
    }
}