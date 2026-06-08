import { useState } from 'react'

import { logic } from '../logic'

export function RegisterView({ onLoginClicked, onUserRegistered }) {
    var [feedback, setFeedback] = useState('')

    var handleLoginClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    var handleRegisterSubmit = event => {
        event.preventDefault()

        var name = event.target.name.value
        var email = event.target.email.value
        var username = event.target.username.value
        var password = event.target.password.value
        var passwordRepeat = event.target.passwordRepeat.value

        try {
            logic.registerUser(name, email, username, password, passwordRepeat)

            event.target.reset()

            onUserRegistered()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Register</h2>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
            <input className="input" id="name" placeholder="Name" />

            <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
            <input className="input" id="email" placeholder="Email" />

            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input className="input" id="username" placeholder="Username" />

            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input className="input" id="password" type="password" placeholder="Password" />

            <label htmlFor="passwordRepeat" style={{ fontWeight: "bold" }}>Repeat Password</label>
            <input className="input" id="passwordRepeat" type="password" placeholder="Repeat Password" />

            <button className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose" type="submit">Register</button>
        </form>

        <a className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose underline inline-block" href="" onClick={handleLoginClick}>Login</a>

        {feedback && <p>{feedback}</p>}
    </div>
}