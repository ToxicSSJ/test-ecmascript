// pruebas en es10
// nota: si suceden errores
// es posible que se tenga
// que actualizar node
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat(2)) // aplanar/elegir un nivel

let array = [1, 2, 3, 4, 5]
console.log(array.flatMap(value => [value, value * 2])) // uso de flatMap

let hello = '        hello world'
console.log(hello) // imprime con los espacios
console.log(hello.trimStart()) // remueve los espacios al principio

let hello = 'hello world         '
console.log(hello) // imprime con los espacios
console.log(hello.trimEnd()) // remueve los espacios al final

// console color
console.log("%cTesting blue color...", "color: blue");

// try {
// 
// } catch(error) {
//     error
// }

// es10 Object.fromEntries
let entries = [["name", "abraham"], ["age", 19]]
console.log(Object.fromEntries(entries)) // construir un objeto por medio de arreglos

let simbolo = `Mi Simbolo`
let symbol = Symbol(simbolo)
console.log(symbol.description) // asi se puede obtener el string real