// clases
class calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

// instanciación
const calc = new calculator()
console.log(calc.sum(2, 2))

import { hello } from './module'
hello() // llamo a la función hello que se encuentra en module.js

// Generadores (generators) de ES6
function* helloWorld() {
    if(true)
        yield 'Hello, '
    if(true)
        yield 'World'
}

// llamado de la función
const generatorHello = helloWorld()

console.log(generatorHello.next().value) // lanzará Hello,
console.log(generatorHello.next().value) // lanzará World
console.log(generatorHello.next().value) // lanzará undefined
