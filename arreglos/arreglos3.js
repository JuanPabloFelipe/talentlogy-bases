//Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. 
//Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (findindex)

const numeros= [1, 2, 3, 4, 5, 2];

let num = parseInt(prompt("ingrea el numero que quiere buscar"));

const listado = numeros.findIndex((a) => a === num);

if (listado === -1) {

console.log(`el ${num} no esta en nuestra lista de productos`)
    
} else {
    console.log(`el ${num} esta en la posicion ${listado}`)
}



