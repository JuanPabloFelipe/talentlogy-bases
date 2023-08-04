//Escribir un programa que pregunte por consola por los 
//productos de una cesta de la compra, separados por comas, y muestre por pantalla cada uno de los productos 
//en una línea distinta.

let productos = prompt("ingrese su litado de productos (separados por comas ,)")
let producto =productos.split(",");

for (let pro = 0; pro < producto.length; pro++) {
  alert("produtos " + (pro + 1) + ": " + producto[pro]);
  console.log("produtos " + (pro + 1) + ": " + producto[pro]);
}  