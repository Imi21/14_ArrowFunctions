// 1. Funciones flecha


// function saludar() {
//     return "Hola";
//   }

const saludar = () => {return "Hola"}

console.log(saludar());

// function division(a,b) {
//     return a / b;
//   }

const division = (a,b) => a/b;

console.log (division(10,2))


// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

console.log(miNombre("Imanol"));

// function test2() {
//     console.log("Función test 2 ejecutada.");
//   }
//   function test1(callback) {
//     callback();
//   }

const test2 = () =>console.log("Funcion test2 ejecutada.");

const test1 = (x) => x();

test1(test2)

function Mifuncion() {

}

// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [{
    nombre: "Jamiro",
    edad: 45,
},
{
    nombre: "Juan",
    edad: 35,
},
{
    nombre: "Paco",
    edad: 34,
},
{
    nombre: "Pepe",
    edad: 14,
},
{
    nombre: "Pilar",
    edad: 24,
},
{
    nombre: "Laura",
    edad: 24,
},
{
    nombre: "Jenny",
    edad: 10,
},
];


// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const genteMayor25 = gente.filter(persona => persona.edad > 25)
console.log(genteMayor25)
// Crea un array con la gente que empieza por J. 
const genteJ = gente.filter(persona => persona.nombre.startsWith("J"))
console.log(genteJ)

// 3. Map
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [4, 5, 6, 7, 8, 9, 10];
const numbersElevado = numbers.map(number => { return number ** number })
console.log(numbersElevado)

// // Resultado esperado
// // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]
// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];


const foodListFrase = foodList.map((food, indice) => {
if (indice == 0)
    return `Como soy de Italia, amo comer ${food}`
else if (indice == 1) {
    return `Como soy de Japón, amo comer ${food}`
} else if (indice == 2) {
    return `Como soy de Valencia, amo comer ${food}`
} else if (indice == 3) {
    return `Aunque no como carne, el ${food} es sabroso`
}


})
console.log(foodListFrase)
// //Resultado esperado
// /* [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
//    ]
// */



// 4. Filter
// Crea un segundo array que devuelva los impares
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numberImpar = numbers1.filter(number => number % 2 != 0)
console.log(numberImpar);
// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList2 = [{
    name: 'Tempeh',
    isVeggie: true
},
{
    name: 'Cheesbacon burguer',
    isVeggie: false
},
{
    name: 'Tofu burguer',
    isVeggie: true
},
{
    name: 'Entrecot',
    isVeggie: false
}
];



const foodListVegano = foodList2.filter(food => food.isVeggie == true)
const foodListFraseVegano = foodListVegano.map((food, indice) => {
if (indice == 0) {
    return `Qué rico ${food.name} me voy a comer`
} else if (indice == 1) {
    return `Qué rica ${food.name} me voy a comer`
}
});

console.log(foodListFraseVegano)

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
const numberMulti = numeros.reduce((a, b) => a * b)
console.log(numberMulti)
// // Salida--> 483600



  
  

  