// pruebas de operador de reposo
const obj = {
    name: 'abraham',
    age: 19,
    country: 'CO'
}

let { country, ...all } = obj
console.log(all) // me muestra todo exceptuando country

const obj = {
    name: 'abraham',
    age: 19
}

const obj1 = {
    ...obj, // anidar objetos ES9
    country: 'CO'
}

console.log(obj1) // imprimo el objeto anidado

// otra prueba adicional
const helloWorld = () => {
    return new Promise((resolve, reject) => { // instanciar promesa
        (true)
         ? setTimeout(() => resolve('Hello World'), 3000) // resolver
         : reject(new Error('Test Error')) // lanzar error
    })
}

helloWorld() // llamar a hellWorld
    .then(response => console.log(response)) // imprimir resultado
    .catch(error => console.log(error)) // capturar errores
    .finally(() => console.log('Finalizó')) // lo muestra sin importar si salió bien o mal

// pruebas con regex es9
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // definimos un regex
const match = regexData.exec('2018-04-20') // parseamos un regex
const year = match[1] // accedo solo al año
const month = match[2] // accedo solo al mes
const day = match[3] // accedo solo al dia

console.log(year, month, day) // imprimo los valores obtenidos