//Calcule la media aritmética de 3 números cualesquiera. 
let num1 = parseInt(prompt ("introduce numero1"));
let num2 = parseInt(prompt ("introduce numero2"));
let num3 = parseInt(prompt ("introduce numero3"));
let promedio = parseInt((num1+num2+num3)/3).toFixed(2);
alert(`el promedio es de ${promedio}`);