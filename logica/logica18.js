//Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. 
//Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%,
//las otras marcas 2%

let marca = prompt("Ingrese la marca de la motocicleta:");
let precio = parseFloat(prompt("Ingrese el precio de la motocicleta:"));

let descuento;

if (marca === "Honda") {
  descuento = 0.05;
} else if (marca === "Yamaha") {
  descuento = 0.08;
} else if (marca === "Suzuki") {
  descuento = 0.10;
} else {
  descuento = 0.02;
}

const descuentoAplicado = precio * descuento;
const precioConDescuento = precio - descuentoAplicado;

console.log(`Marca: ${marca}`);
console.log(`Precio original: ${precio}`);
console.log(`Descuento: ${descuentoAplicado}`);
console.log(`Precio con descuento: ${precioConDescuento}`);
