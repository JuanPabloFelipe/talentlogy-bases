//Comprobar si un número digitado por el usuario es positivo o negativo.
let num= parseFloat(prompt("ingrese un numero"))
if (num > 0) {
    alert("El número es positivo");
} else if (num < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}
