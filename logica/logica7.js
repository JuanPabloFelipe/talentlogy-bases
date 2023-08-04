//Una tienda ofrece un descuento del 15% sobre el total de 
//la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
let compra = parseInt(prompt("ingrese el precio total de la prenda"));
let descuento = compra - (compra * (15 / 100)).toFixed(2);
alert(`su precio final con descuento es de ${descuento}`)