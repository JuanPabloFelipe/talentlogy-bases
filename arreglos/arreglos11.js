//Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear 
//una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. 
//Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, 
//el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.

const rellenarArrayConMultiplos = (tamano, numero) => {
    const array = [];
    for (let i = 1; i <= tamano; i++) {
      array.push(numero * i);
    }
    return array;
};

const mostrarArray = (array) => {
    console.log("Elementos del array:");
    array.forEach((elemento) => {
      console.log(elemento);
    });
};

const tamanoArray = parseInt(prompt("Ingresa el tamaño del array:"));
const numeroMultiplo = parseInt(prompt("Ingresa el número del que quieres obtener los múltiplos:"));

const miArray = rellenarArrayConMultiplos(tamanoArray, numeroMultiplo);

mostrarArray(miArray);