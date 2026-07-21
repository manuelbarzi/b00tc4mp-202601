console.log('start')

console.log('blocking for 2 seconds begins')

let before = Date.now()

while (Date.now() - before < 2000) {
  // do nothing
};

console.log('blocking for 2 seconds ends')

console.log('blocking for 4 seconds begins')

before = Date.now()

while (Date.now() - before < 4000) {
  // do nothing
};

console.log('blocking for 4 seconds ends')

console.log('end')