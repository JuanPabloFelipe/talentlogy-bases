//Ingresar por teclado el nombre y el signo de cualquier persona e imprima, 
//el nombre sólo si la persona es signo Aries, caso contrario imprima no es signo Aries.
var nombre =prompt("ingrese su nombre");
var signo =prompt("ingrese su signo");
if (signo.toLowerCase() === "aries") { 
    alert(`${nombre}`); 
    
} else { alert("no es aries");
    
}
