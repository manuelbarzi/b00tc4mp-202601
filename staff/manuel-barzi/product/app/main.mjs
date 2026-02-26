import { createHomeView, createLandingView, createLoginView, createRegisterView } from './views.mjs'

var titleText = document.createTextNode('App')
document.head.children[2].appendChild(titleText)

var landingView = createLandingView()
var loginView = createLoginView()
var registerView = createRegisterView()
var homeView = createHomeView()

document.body.appendChild(landingView)

var landingLoginLink = landingView.children[1].children[0]
landingLoginLink.addEventListener('click', function(event) {
    event.preventDefault()

    document.body.removeChild(landingView)
    document.body.appendChild(loginView)
})

// TODO mechanise the other links navigations from other views
// TODO research how to manage forms in javascript (submit event)