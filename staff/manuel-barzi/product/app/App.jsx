import { LandingView, LoginView, RegisterView, HomeView, ProfileView } from './views/index'

var { useState } = React

export function App() {
    var viewState = useState('landing')
    var view = viewState[0]
    var setView = viewState[1]

    function handleLoginClicked() {
        setView('login')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked}  />
    else if (view === 'login')
        return <LoginView />
    else if (view === 'register')
        return <RegisterView />
    else if (view === 'home')
        return <HomeView />
    else if (view === 'profile')
        return <ProfileView />
}