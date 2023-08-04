//Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.

let oracion = prompt("ingrese una oracion");

const numeroLertras=(ora)=>  ora.split(" ").length;
    
 

const numLet = numeroLertras(oracion)
console.log(`su horacion tiene ${numLet} palabras`);
