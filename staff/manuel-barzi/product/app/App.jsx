import { useState } from 'react'

import { LandingView, LoginView, RegisterView, HomeView, ProfileView } from './views/index'

export function App() {
    var [view, setView] = useState('landing')

    function handleLoginClicked() {
        setView('login')
    }

    function handleRegisterClicked() {
        setView('register')
    }

    function handleUserRegistered() {
        setView('login')
    }

    function handleUserLoggedIn() {
        setView('home')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked} onRegisterClicked={handleRegisterClicked} />
    else if (view === 'login')
        return <LoginView onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn}/>
    else if (view === 'register')
        return <RegisterView onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered}/>
    else if (view === 'home')
        return <HomeView />
    else if (view === 'profile')
        return <ProfileView />
}