// Función tipica JavaScript con valores
// por defecto.
function newFunction(username, age, country) {
    var username = username || 'Toxic#2381';
    var age = age || 19;
    var country = country || 'CO';
    console.log(username, age, country);
}

// ES6 Función Printhat2
function printhat2(username = 'Toxic#2381', age = 19, country = 'CO') {
    console.log(username, age, country);
}

// Prueba de Printhat2
printhat2();
printhat2('hola', 22, 'CO');

let hello = 'Hello';
let world = 'World';

// Concatenación tipica
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

// ES6 Concatenación
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)