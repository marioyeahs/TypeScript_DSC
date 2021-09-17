const number = 20;
const djisktra = 2^53 ;
const string = "hello";
const boolean = true;
const objectArray = ["item", number, 12.2398, false, [1,2,3], 'a'];
const object = { key1: "Value", number: 13, "Juan Perez": true };
const indefinido = undefined;
const nulo = null;
console.log(typeof number)
console.log(typeof djisktra)
console.log(typeof string)
console.log(typeof boolean)
console.log(typeof objectArray)
console.log(typeof object)
console.log(typeof indefinido)
console.log(typeof nulo)

let number1: number;
let cadena: string;
let booleano: boolean;
let arreglo: number[];
let objetos: {
    edad: number;
    nombre: string;
    genero: boolean;
    otra_variable: {
        alumnos: string[];
        boleta: number;
    }
}
