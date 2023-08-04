//Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension 
//donde el prefijo es el código del país +34, y la extensión tiene dos 
//dígitos (por ejemplo +34-913724710-56). Escribir un programa que pregunte 
//por un número de teléfono con este formato y muestre por pantalla el número 
//de teléfono sin el prefijo y la extensión.
//Escribir un programa que pida al usuario que introduzca una frase en la 

let numTelefono= prompt("ingrese su numero de telefono con el siguente formato (prefijo-número-extension) onde el prefijo es el código del país +34, y la extensión tiene dos" + 
"dígitos (por ejemplo +34-913724710-56).");

//const numSinFormato = num =>{ return num.split("-")}

const numSinFormato=numTelefono.split("-")

console.log("su numero sin formato es:")
console.log(numSinFormato.splice(1,1));