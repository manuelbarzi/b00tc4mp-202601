export function LandingView({ onLoginClicked, onRegisterClicked }) {
    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    return <div>
        <header className="header">
            <img className="logo-image" src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" /> <h1>App</h1>
        </header>

        <p>
            <a className="button button-link" href="" onClick={handleLoginClick}>Login</a> or <a className="button button-link" href="" onClick={handleRegisterClick}>Register</a>
        </p>
    </div>
}