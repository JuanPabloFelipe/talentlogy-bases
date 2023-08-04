//Hacer un programa que realice la media aritmética de 2 números.

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese un numero"));

const promedio = (num1,num2) => ((num1+num2)/2);


const resultado = promedio(num1,num2)
console.log(`su promedio es de ${resultado}`);
