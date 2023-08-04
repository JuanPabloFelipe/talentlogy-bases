//Determinar si un número es par o no.

let num = parseInt(prompt("ingrese un numero"));
function par_o_impar(num){
    return (num%2==0) ? console.log(`su numero ${num} es par`) : console.log(`su numero ${num} es impar`);
}

const resultado = par_o_impar()