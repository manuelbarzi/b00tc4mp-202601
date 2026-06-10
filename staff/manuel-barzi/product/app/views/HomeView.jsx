import { useState, useEffect } from 'react'

import { logic } from '../logic'

export function HomeView({ onProfileClicked, onLogoutClicked }) {
    const [feedback, setFeedback] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        try {
            const name = logic.getLoggedInUserName()

            setName(name)
        } catch (error) {
            setFeedback(error.message)
        }
    }, [])

    const handleProfileClick = event => {
        event.preventDefault()

        onProfileClicked()
    }

    const handleLogoutClick = event => {
        event.preventDefault()

        try {
            logic.logoutUser()

            onLogoutClicked()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header className="header">
            <img className="logo-image" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1>App</h1>
            <h1 className="title">Hello, {name}!</h1>
        </header>

        <div className="flex gap-2 justify-between">
            <a className="button button-link" href="" onClick={handleProfileClick}>Profile</a>
            <button className="button" onClick={handleLogoutClick}>Logout</button>
        </div>

        {feedback && <p className="feedback">{feedback}</p>}
    </div>
}