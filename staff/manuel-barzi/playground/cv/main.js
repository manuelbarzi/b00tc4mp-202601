document.title = 'Homer Simpson - CV'

var title = document.createElement('h1')
var titleText = document.createTextNode(document.title)
title.appendChild(titleText)
document.body.appendChild(title)

var introParagraph = document.createElement('p')
var introText = document.createTextNode('Homer J. Simpson is a highly "edumacated" professional with over 30 years of experience in preventing (and occasionally causing) nuclear meltdowns. As a versatile generalist, he has held over 188 positions, ranging from astronaut to snowplow driver, consistently demonstrating that minimal effort can still lead to global adventures.')
introParagraph.appendChild(introText)
document.body.appendChild(introParagraph)

var contactTitle = document.createElement('h2')
var contactText = document.createTextNode('Contact')
contactTitle.appendChild(contactText)
document.body.appendChild(contactTitle)

var contactList = document.createElement('ul')

var contactEmailItem = document.createElement('li')
var contactEmailTitle = document.createElement('strong')
var contactEmailTitleText = document.createTextNode('E-mail:')
contactEmailTitle.appendChild(contactEmailTitleText)
contactEmailItem.appendChild(contactEmailTitle)
var contactEmailSpaceText = document.createTextNode(' ')
contactEmailItem.appendChild(contactEmailSpaceText)
var contactEmailLink = document.createElement('a')
contactEmailLink.href = 'mailto:homer@simpson.com'
var contactEmailText = document.createTextNode('home@simpson.com')
contactEmailLink.appendChild(contactEmailText)
contactEmailItem.appendChild(contactEmailLink)

contactList.appendChild(contactEmailItem)

var contactPhone = document.createElement('li')
// TODO make it all programatically
contactPhone.textContent = '+1 123 456 789'
contactList.appendChild(contactPhone)

document.body.appendChild(contactList)