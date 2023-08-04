//Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, 
//mostrar en pantalla el valor que ocupa el centro del array.

const nums = []
let cantidad = parseInt(prompt("ingrese la cantidad de numeros aletorios que necesita "));

for (i=0;i<cantidad;i++){
    nums.push(Math.floor(100*Math.random()));
}
const impares = nums.filter((a)=> a%2 !== 0);
const mitad = nums.slice(cantidad/2,cantidad/2+1);


console.log(`los numeros generados son: 
${nums}`);
console.log(`los numeros impares son: 
${impares}`);
console.log(`el numero de la mitad es: 
${mitad}`);
