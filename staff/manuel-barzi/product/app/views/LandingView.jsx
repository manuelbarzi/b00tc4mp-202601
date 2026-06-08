export function LandingView({ onLoginClicked, onRegisterClicked }) {
    var handleLoginClick = event => {
        event.preventDefault()

        onLoginClicked()
    }

    var handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClicked()
    }

    return <div>
        <header>
            <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/659ba59520d886f0cb86d3ba_ai-logo-generator-4.png" style={{ width: '100px' }} />  <h1 style={{ display: 'inline-block' }}>App</h1>
        </header>

        <p>
            <a className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose underline inline-block" href="" onClick={handleLoginClick}>Login</a> or <a className="bg-[greenyellow] text-[black] border-[greenyellow] border px-2 leading-loose underline inline-block" href="" onClick={handleRegisterClick}>Register</a>
        </p>
    </div>
}