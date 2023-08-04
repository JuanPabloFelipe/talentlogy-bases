//Crea un array o arreglo unidimensional con un tamaño de 10, 
//inserta los valores numéricos que desees de la manera que quieras y muestra por pantalla 
//la media de valores del array.

let cadena = (prompt("ingrese 10 numeros enteros (separados por un espacio) "));
console.log(cadena.split(' '))
const num=cadena.split(' ');
let suma=0
let media=0
for(let i=0;i<num.length; i++) {
suma = suma + parseInt(num[i]);
}
media = (suma/num.length);
console.log(media)

