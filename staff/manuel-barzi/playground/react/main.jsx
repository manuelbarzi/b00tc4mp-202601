import { logic } from './logic.mjs'

var rootDiv = document.getElementById('root')
var root = ReactDOM.createRoot(rootDiv)

var title = <h1>Hello, React!</h1>
var subtitle = <h2>The most cool component library!</h2>

var colorList = <ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
</ul>

var handleSaluteSubmit = function (event) {
    event.preventDefault()

    var name = event.target.name.value

    alert(logic.salute(name))
}

var saluteForm = <form onSubmit={handleSaluteSubmit}>
    <input name="name" type="text" placeholder="Name" />
    <button type="submit">Salute</button>
</form>

// TODO add register form (name, email, username, password, password-repeat)

root.render([title, subtitle, colorList, saluteForm])