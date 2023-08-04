//Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, 
//y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.


const frase = prompt('Ingresa una frase:');
const vocal = prompt('Ingresa una vocal:');

const vocalMayuscula = vocal.toUpperCase();

const fraseModificada = frase.replace(new RegExp(vocal, 'gi'), vocalMayuscula);

console.log('Frase modificada con la vocal en mayuscula:')
console.log (fraseModificada);
