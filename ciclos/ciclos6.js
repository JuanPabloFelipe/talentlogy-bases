//Escribir un programa que calcule los primeros ‘n’ números de Fibonacci. 
//Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente es la suma de los 
//anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …

let num = parseInt(prompt("ingrese un numero"));


let a = 0;
let b = 1;


for (let i = 0;i<=num; i++){
    console.log(a);
    let c = (a + b);
    b = a; 
    a = c;
    
}

