import { useState } from 'react'

import { logic } from '../logic'

export function LoginView({ onRegisterClicked, onUserLoggedIn }) {
    var [feedback, setFeedback] = useState('')

    var handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    var handleLoginSubmit = event => {
        event.preventDefault()

        var username = event.target.username.value
        var password = event.target.password.value

        try {
            logic.loginUser(username, password)

            event.target.reset()

            onUserLoggedIn()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Login</h2>

        <form className="form" onSubmit={handleLoginSubmit}>
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input className="input" id="username" placeholder="Username" />

            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input className="input" id="password" type='password' placeholder="Password" />

            <button className="button" type="submnit">Login</button>
        </form>

        <a className="button" href="" onClick={handleRegisterClick} >Register</a>

        {feedback && <p>{feedback}</p>}
    </div>
}
