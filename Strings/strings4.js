//Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre 
//por pantalla la frase invertida.

const fraseIngresada = prompt('Ingresa una frase:');

function revertirFrase(frase) {

    const palabras = frase.split('');

    const fraseRevertida = palabras.reverse().join('');

    return fraseRevertida;
}

const fraseRevertida = revertirFrase(fraseIngresada);
console.log("Frase revertida:") 
console.log(fraseRevertida);

