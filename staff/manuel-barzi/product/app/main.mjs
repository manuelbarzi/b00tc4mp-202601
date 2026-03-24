import './populate.mjs'
import { createHomeView, createLandingView, createLoginView, createRegisterView, createProfileView } from './views.mjs'
import { logic } from './logic.mjs'

var titleText = document.createTextNode('App')
document.head.children[2].appendChild(titleText)

var landingView = createLandingView()
var loginView = createLoginView()
var registerView = createRegisterView()
var homeView = createHomeView()
var profileView = createProfileView()

document.body.appendChild(landingView)

var landingLoginLink = landingView.children[1].children[0]
landingLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    document.body.removeChild(landingView)
    document.body.appendChild(loginView)
})

var landingRegisterLink = landingView.children[1].children[1]
landingRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    document.body.removeChild(landingView)
    document.body.appendChild(registerView)
})

var loginRegisterLink = loginView.children[3]
loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginForm.reset()
    loginFeedbackPanel.textContent = ''

    document.body.removeChild(loginView)
    document.body.appendChild(registerView)
})

var registerLoginLink = registerView.children[3]
registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerForm.reset()
    registerFeedbackPanel.textContent = ''

    document.body.removeChild(registerView)
    document.body.appendChild(loginView)
})

var registerFeedbackPanel = registerView.children[4]

var registerForm = registerView.children[2]
registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var nameInput = registerForm.children[1]
    var emailInput = registerForm.children[3]
    var usernameInput = registerForm.children[5]
    var passwordInput = registerForm.children[7]
    var passwordRepeatInput = registerForm.children[9]

    var name = nameInput.value
    var email = emailInput.value
    var username = usernameInput.value
    var password = passwordInput.value
    var passwordRepeat = passwordRepeatInput.value

    try {
        logic.registerUser(name, email, username, password, passwordRepeat)

        registerForm.reset()
        registerFeedbackPanel.textContent = ''

        document.body.removeChild(registerView)
        document.body.appendChild(loginView)
    } catch (error) {
        registerFeedbackPanel.textContent = error.message
    }
})

var loginFeedbackPanel = loginView.children[4]

var loginForm = loginView.children[2]
loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var usernameInput = loginForm.children[1]
    var passwordInput = loginForm.children[3]

    var username = usernameInput.value
    var password = passwordInput.value

    try {
        logic.loginUser(username, password)

        loginForm.reset()
        loginFeedbackPanel.textContent = ''

        var userName = logic.getLoggedInUserName()

        var homeTitle = homeView.children[1]
        homeTitle.textContent = 'Hello, ' + userName + '!'

        document.body.removeChild(loginView)
        document.body.appendChild(homeView)
    } catch (error) {
        loginFeedbackPanel.textContent = error.message
    }
})

var homeProfileLink = homeView.children[2]
homeProfileLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(homeView)
    document.body.appendChild(profileView)
})

var homeFeedbackPanel = homeView.children[4]

var homeLogoutButton = homeView.children[3]
homeLogoutButton.addEventListener('click', function (event) {
    try {
        logic.logoutUser()

        document.body.removeChild(homeView)
        document.body.appendChild(loginView)
    } catch (error) {
        homeFeedbackPanel.textContent = error.message
    }
})

// TODO implement prefile name form submit behavior to catch new user name and call logic.updateUserName(newName). if fine, then show 'User name successfully updated' in profile feedback panel.