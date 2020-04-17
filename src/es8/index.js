// Prueba de Object.entries
const data = {
    frontend: 'abraham',
    backend: 'isabel',
    design: 'ana',
}

const entries = Object.entries(data) // se produce una matriz
console.log(entries) // imprimir la matriz generada

// saber cuantos elementos tiene con es8
console.log(entries.length)

// otra prueba más
const data = {
    frontend: 'abraham',
    backend: 'isabel',
    design: 'ana',
}

// es8 Object.values(data)
const values = Object.values(data)
console.log(values) // imprime ['abraham', 'isa...]
console.log(values.length) // tamaño

// pruebas con string
const string = 'hello'
console.log(string.padStart(7, 'hi')) // permite hacer formatos de tablas
console.log(string.padEnd(12, ' -----')) // permite hacer formatos de tablas

const obj = {
    name: 'abraham', // no lanza error (mas amigable es8)
}

// continuación @_@
// 17/04/2020
// creamos una promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => { // instancia la promesa
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000) // espera 3 segundos
         : reject(new Error('Test Error')) // lanza error si salió mal
    })
}

const helloAsync = async () => {
    const hello = await helloWorld() // espera a que suceda el resolve
    console.log(hello) // imprimo el resultado
}

helloAsync(); // llamo la función

// nueva función con
// try y catch para
// poder manejar errores
const anotherFunction = async () => {
    try {
        const hello = await helloWorld() // espero a que la función se complete
        console.log(hello) // imprimo Hello World
    } catch(error) {
        console.log(error) // imprimo el error con stacktrace
    }
}

anotherFunction(); // se llama a la nueva función