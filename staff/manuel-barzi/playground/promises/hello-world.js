console.log('We start here')

console.log('We build and start promise chain here')

new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('Hello, World!')
        reject('Bye-bye, cruel World!')
    }, 5000)
})
.then(message => {
    console.log(message)
})
.catch(error => {
    console.error('Error:', error)
})

console.log('We continue here')