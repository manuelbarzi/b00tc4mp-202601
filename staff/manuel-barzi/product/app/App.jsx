import { useState } from 'react'

import { LandingView, LoginView, RegisterView, HomeView, ProfileView } from './views'

export function App() {
    const [view, setView] = useState('landing')

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

    function handleProfileClicked() {
        setView('profile')
    }

    function handleLogoutClicked() {
        setView('landing')
    }

    function handleHomeClicked() {
        setView('home')
    }

    if (view === 'landing')
        return <LandingView onLoginClicked={handleLoginClicked} onRegisterClicked={handleRegisterClicked} />
    else if (view === 'login')
        return <LoginView onRegisterClicked={handleRegisterClicked} onUserLoggedIn={handleUserLoggedIn}/>
    else if (view === 'register')
        return <RegisterView onLoginClicked={handleLoginClicked} onUserRegistered={handleUserRegistered}/>
    else if (view === 'home')
        return <HomeView onProfileClicked={handleProfileClicked} onLogoutClicked={handleLogoutClicked} />
    else if (view === 'profile')
        return <ProfileView onHomeClicked={handleHomeClicked} />
}