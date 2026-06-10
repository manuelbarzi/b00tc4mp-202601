import { useState } from 'react'

import { logic } from '../logic'

export function ProfileView({ onHomeClicked }) {
    var [feedback, setFeedback] = useState('')

    var handleHomeClick = event => {
        event.preventDefault()

        onHomeClicked()
    }

    var handleProfileNameSubmit = event => {
        event.preventDefault()

        var name = event.target.name.value

        try {
            logic.modifyUserName(name)

            event.target.reset()

            setFeedback('User name successfully updated')
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: "100px" }} /> <h1 style={{ display: "inline-block" }}>App</h1>
        </header>

        <h2>Profile</h2>

        <a className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose underline inline-block" href="" onClick={handleHomeClick}>Home</a>

        <form className="flex flex-col gap-1 my-1" onSubmit={handleProfileNameSubmit}>
            <label htmlFor="name" style={{ fontWeight: "bold" }}>Name</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="name" placeholder="Name" />
            <button className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose" type="submit">Update name</button>
        </form>

        <form className="flex flex-col gap-1 my-1">
            <label htmlFor="email" style={{ fontWeight: "bold" }}>Email</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="email" placeholder="Email" />
            <button className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose" type="submit">Update email</button>
        </form>

        <form className="flex flex-col gap-1 my-1">
            <label htmlFor="username" style={{ fontWeight: "bold" }}>Username</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="username" placeholder="Username" />
            <button className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose" type="submit">Update username</button>
        </form>

        <form className="flex flex-col gap-1 my-1">
            <label htmlFor="password" style={{ fontWeight: "bold" }}>Password</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="password" type="password" placeholder="Password" />
            <label htmlFor="passwordNew" style={{ fontWeight: "bold" }}>New Password</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="passwordNew" type="password" placeholder="New Password" />
            <label htmlFor="passwordNewRepeat" style={{ fontWeight: "bold" }}>Repeat New Password</label>
            <input className="border-[greenyellow] border px-2 leading-loose selection:text-[greenyellow] selection:bg-[red]" id="passwordNewRepeat" type="password" placeholder="Repeat New Password" />
            <button className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose" type="submit">Update password</button>
        </form>

        {feedback && <p>{feedback}</p>}
    </div>
}
