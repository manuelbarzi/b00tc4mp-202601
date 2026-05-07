// object destructuring

var mike = { name: 'Mike', age: 30 }

//var name = mike.name
//var age = mike.age

var { name, age } = mike
console.log(name, age)

var { age } = mike
console.log(age)

var mike = ['Mike', 30]

//var name = mike[0]
//var age = mike[1]

var { 0: name, 1: age } = mike
console.log(name, age)

var { 1: age } = mike
console.log(age)

// array destructuring

var [name, age] = mike
console.log(name, age)

var [,age] = mike
console.log(age)