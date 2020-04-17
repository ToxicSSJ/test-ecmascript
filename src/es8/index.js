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