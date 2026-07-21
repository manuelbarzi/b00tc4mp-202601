console.log('start')

console.log('non-blocking for 2 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 2 seconds ends')
}, 2000)

console.log('non-blocking for 4 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 4 seconds ends')
}, 4000)

console.log('end')

// first timeout callback queued after 2 seconds
// second timeout callback queued after 4 seconds