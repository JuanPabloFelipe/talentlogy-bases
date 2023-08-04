//Invertir un número entero con Recursividad.

let num= parseInt(prompt("ingrese un numero "));

function revertirNumeroRecursivo(n) {
    if (n < 10) {
      return n;
    } else {
      let ultimoDigito = n % 10;
      let resto = Math.floor(n / 10);
      return ultimoDigito.toString() + revertirNumeroRecursivo(resto).toString();
    }
  }
console.log(revertirNumeroRecursivo(num));
