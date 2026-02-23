var landingView = document.createElement('div')

var landingHeader = document.createElement('header')
var landingLogoImage = document.createElement('img')
landingLogoImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcqp7uem68vwBG25scxHy0PPoFJbNVFsdAfQsDqsBwg&s'
landingLogoImage.style.width = '50px'
landingHeader.appendChild(landingLogoImage)
var landingHeaderSpaceText = document.createTextNode(' ')
landingHeader.appendChild(landingHeaderSpaceText)
var landingTitle = document.createElement('h1')
landingTitle.style.display = 'inline-block'
var landingTitleText = document.createTextNode('App')
landingTitle.appendChild(landingTitleText)
landingHeader.appendChild(landingTitle)
landingView.appendChild(landingHeader)

var landingParagraph = document.createElement('p')
var landingLoginLink = document.createElement('a')
landingLoginLink.href = ''
var landingLoginText = document.createTextNode('Login')
landingLoginLink.appendChild(landingLoginText)
landingParagraph.appendChild(landingLoginLink)
var landingParagraphSpaceOrText = document.createTextNode(' or ')
landingParagraph.appendChild(landingParagraphSpaceOrText)
var landingRegisterLink = document.createElement('a')
landingRegisterLink.href = ''
var landingRegisterText = document.createTextNode('Register')
landingRegisterLink.appendChild(landingRegisterText)
landingParagraph.appendChild(landingRegisterLink)
landingView.appendChild(landingParagraph)

// document.body.appendChild(landingView)

// TODO implement login view

var loginView = document.createElement('div')

var loginHeader = document.createElement('header')
var loginLogoImage = document.createElement('img')
loginLogoImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUcqp7uem68vwBG25scxHy0PPoFJbNVFsdAfQsDqsBwg&s'
loginLogoImage.style.width = '50px'
loginHeader.appendChild(loginLogoImage)
var loginHeaderSpaceText = document.createTextNode(' ')
loginHeader.appendChild(loginHeaderSpaceText)
var loginTitle = document.createElement('h1')
loginTitle.style.display = 'inline-block'
var loginTitleText = document.createTextNode('App')
loginTitle.appendChild(loginTitleText)
loginHeader.appendChild(loginTitle)
loginView.appendChild(loginHeader)

var loginTitle = document.createElement('h2')
var loginTitleText = document.createTextNode('Login')
loginTitle.appendChild(loginTitleText)
loginView.appendChild(loginTitle)

var loginForm = document.createElement('form')
var loginUsernameLabel = document.createElement('label')
var loginUsernameLabelText = document.createTextNode('Username')
loginUsernameLabel.appendChild(loginUsernameLabelText)
loginForm.appendChild(loginUsernameLabel)
var loginUsernameInput = document.createElement('input')
loginForm.appendChild(loginUsernameInput)
var loginPasswordLabel = document.createElement('label')
var loginPasswordLabelText = document.createTextNode('Password')
loginPasswordLabel.appendChild(loginPasswordLabelText)
loginForm.appendChild(loginPasswordLabel)
var loginPasswordInput = document.createElement('input')
loginForm.appendChild(loginPasswordInput)
var loginSubmitButton = document.createElement('button')
var loginSubmitButtonText = document.createTextNode('Login')
loginSubmitButton.appendChild(loginSubmitButtonText)
loginForm.appendChild(loginSubmitButton)
loginView.appendChild(loginForm)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
var loginRegisterText = document.createTextNode('Register')
loginRegisterLink.appendChild(loginRegisterText)
loginView.appendChild(loginRegisterLink)

document.body.appendChild(loginView)

// TODO implement register view (name, email, username, password)
// TODO implement home view (a title with "Hello, Home!")