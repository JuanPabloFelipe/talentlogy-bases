//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.

const entero = [5, 7, 19, 14, 9, 5, 12, 11, 14, 9, 7, 15, 5, 12, 3, 4];

let suma=0
let media=0

for(let i=0;i<entero.length; i++) {
suma = suma + parseInt(entero[i]);
}
media = (suma/entero.length);

let max= Math.max(...entero);
let min= Math.min(...entero);

console.log(`el promedio de los numeros  es ${media.toFixed(2)}`);
console.log(`el numero mayor es ${max}`);
console.log(`el numero menor es ${min}`);




