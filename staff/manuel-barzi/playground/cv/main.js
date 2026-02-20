document.title = 'Homer Simpson - CV'

var title = document.createElement('h1')
title.textContent = document.title
document.body.appendChild(title)

var intro = document.createElement('p')
intro.textContent = 'Homer J. Simpson is a highly "edumacated" professional with over 30 years of experience in preventing (and occasionally causing) nuclear meltdowns. As a versatile generalist, he has held over 188 positions, ranging from astronaut to snowplow driver, consistently demonstrating that minimal effort can still lead to global adventures.'
document.body.appendChild(intro)

var contact = document.createElement('h2')
contact.textContent = 'Contact'
document.body.appendChild(contact)

var contactList = document.createElement('ul')
var contactEmail = document.createElement('li')
contactEmail.textContent = 'home@simpson.com'
contactList.appendChild(contactEmail)
var contactPhone = document.createElement('li')
contactPhone.textContent = '+1 123 456 789'
contactList.appendChild(contactPhone)
document.body.appendChild(contactList)