// Objetos tradicional
let name = 'abraham'
let age = 19

// ES5
obj = { name: name, age: age }

// ES6
obj2 = { name, age }
console.log(obj2)

// otro test con map
const names = [
    {name: 'abraham', age: 19},
    {name: 'yesica', age: 27}
]

// tradicional
let list = names.map(function(item) {
    console.log(item.name)
})

// es6 arrow functions
let list2 = names.map(item => console.log(item.name))

// otra arrow function
const list3 = (name, age, country) => {
    // hacer algo
}

// otra forma arrow function
const list4 = name => {
    // hacer algo
}

// otra forma más (yep another)
const square = num => num * num;

// promesas :: algo va a pasar
// alternativas a callbacks en es6
const hellopromise = () => {
    return new Promise((resolve, reject) => {
        if(true)
            resolve('¡Todo bien!')
        else
            reject('¡Upss!')
    })
}

// ejecutar promeso
hellopromise()
    .then(response => console.log(response))
    .then(() => console.log('test promise then()'))
    .catch(error => console.log(error))