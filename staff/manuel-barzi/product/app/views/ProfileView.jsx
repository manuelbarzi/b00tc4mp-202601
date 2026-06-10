import { useState } from 'react'

import { logic } from '../logic'

export function ProfileView({ onHomeClicked }) {
    const [feedback, setFeedback] = useState('')

    const handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    const handleProfileNameSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value

        try {
            logic.modifyUserName(name)

            event.target.reset()

            setFeedback('User name successfully updated')
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="header">
            <img className="logo-image" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1>App</h1>
        </header>

        <h2 className="title">Profile</h2>

        <a className="button button-link" href="" onClick={handleHomeClick}>Home</a>

        <form className="form" onSubmit={handleProfileNameSubmit}>
            <label htmlFor="name" className="label">Name</label>
            <input className="input" id="name" placeholder="Name" />
            <button className="button w-full" type="submit">Update name</button>
        </form>

        <form className="form">
            <label htmlFor="email" className="label">Email</label>
            <input className="input" id="email" placeholder="Email" />
            <button className="button w-full" type="submit">Update email</button>
        </form>

        <form className="form">
            <label htmlFor="username" className="label">Username</label>
            <input className="input" id="username" placeholder="Username" />
            <button className="button w-full" type="submit">Update username</button>
        </form>

        <form className="form">
            <label htmlFor="password" className="label">Password</label>
            <input className="input" id="password" type="password" placeholder="Password" />
            <label htmlFor="passwordNew" className="label">New Password</label>
            <input className="input" id="passwordNew" type="password" placeholder="New Password" />
            <label htmlFor="passwordNewRepeat" className="label">Repeat New Password</label>
            <input className="input" id="passwordNewRepeat" type="password" placeholder="Repeat New Password" />
            <button className="button w-full" type="submit">Update password</button>
        </form>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}
