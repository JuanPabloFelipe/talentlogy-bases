//Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de un número es el producto de todos los números 
//enteros positivos desde 1 hasta el número en cuestión.
let num= parseInt(prompt("ingrese un numero"))
let factorial=1
for(i=1;i<=num;i++){
   (factorial*=i);
}
console.log(`su numero factorial es ${factorial}`)
