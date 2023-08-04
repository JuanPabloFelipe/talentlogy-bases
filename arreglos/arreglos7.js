//Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado 
//por dos (Utilizar métodos de array). 

const nums = [5, 7, 19, 14, 9, 5, 12, 11, 14, 9, 7, 15, 5, 12, 3, 4];
const mult = nums.map((a)=>a*2);

console.log(`los numeros para multiplicar son ${nums}`);
console.log(`los resultados de la multiplicacion son ${mult}`);
