//Crear Función que determine si un string numérico es capicua EJ: “12321”

const numIngresado = prompt('Ingresa un numero:');

function revertirnum(num) {

    const numeros = num.split('');

    const numRevertido = numeros.reverse().join('');

    return numRevertido;
}

const numeroRevertido = revertirnum(numIngresado);

if (numeroRevertido !== numIngresado) {
    alert(`el numero ingrersado ${numIngresado} no es un numero capicua ${numeroRevertido}`);
} else {
    alert(`el numero ingrersado ${numIngresado} si es un numero capicua ${numeroRevertido}`);
}