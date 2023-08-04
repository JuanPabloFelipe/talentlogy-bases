//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, 
//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.
var nombre= prompt("ingresar nombre"); 
var edad= parseInt(prompt("ingresar edad"));
var sexo = prompt("ingrese sexo")
if (edad=>18 && sexo.toLowerCase() === "m") {
    alert(`su nombre es ${nombre}, su edad es ${edad} y su sexo es ${sexo} `);
} else   {
    alert(` no cumple las condiciones `)
} {
    
}
