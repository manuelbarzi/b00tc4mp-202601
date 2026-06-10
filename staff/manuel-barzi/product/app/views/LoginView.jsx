import { useState } from 'react'

import { logic } from '../logic'

export function LoginView({ onRegisterClicked, onUserLoggedIn }) {
    const [feedback, setFeedback] = useState('')

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    const handleLoginSubmit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            logic.loginUser(username, password)

            event.target.reset()

            onUserLoggedIn()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="header">
            <img className="logo-image" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1>App</h1>
        </header>

        <h2 className="title">Login</h2>

        <form className="form" onSubmit={handleLoginSubmit}>
            <label htmlFor="username" className="label">Username</label>
            <input className="input" id="username" placeholder="Username" />

            <label htmlFor="password" className="label">Password</label>
            <input className="input" id="password" type='password' placeholder="Password" />

            <button className="button w-full" type="submnit">Login</button>
        </form>

        <a className="button button-link" href="" onClick={handleRegisterClick} >Register</a>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}
