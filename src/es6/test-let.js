// JS tradicional
let lorem =
  "Frase super epica que se puede separar en \n" + "otra frase interesante.";

// ES6
let lorem2 = `Otra frase
epica más`;

console.log(lorem);
console.log(lorem2);

//JS tradicional
let person = {
  'name': 'toxic',
  'age': 19,
  'country': 'CO'
};

console.log(person.name, person.age);

// ES6 let
let { name, age, country } = person;
console.log(name, age, country);

// Arreglos con let

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

// ES6 ... para 'concatenar' otros arreglos
let education = ['David', ...team1, ...team2]
console.log(education)

// let sirve para trabajar con elementos
// que se guardan en memoria, pero solo
// esta disponible en el bloque de código
// que será llamad. Pruebas:

{
  var globalVar = 'Variable Global';
}

{
  let globalLet = 'Global Let';
  console.log(globalLet) // Forma correcta
}

console.log(globalVar) // No lanzará error
console.log(globalLet) // Lanzará error

// Constantes
const a = 'b';
a = 'a';
console.log(a) // Lanzará error