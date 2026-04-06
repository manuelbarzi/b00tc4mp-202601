var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var title = React.createElement('h1', { children: 'Hello, React!' })

var subtitle = React.createElement('h2', { children: 'The most cool component library!' })

var colorList = React.createElement('ul', {
    children: [
        React.createElement('li', { children: 'Red' }),
        React.createElement('li', { children: 'Green' }),
        React.createElement('li', { children: 'Blue' })
    ]
})

var saluteForm = React.createElement('form', {
    children: [
        React.createElement('input', { name: 'name', type: 'text', placeholder: 'Name'}),
        React.createElement('button', { type: 'submit', children: 'Salute'})
    ],
    onSubmit: function(event) {
        event.preventDefault()

        var name = event.target.name.value

        alert('Hello, ' + name + '!')
    }
})

// TODO add register form (name, email, username, password, password-repeat)

root.render([title, subtitle, colorList, saluteForm])