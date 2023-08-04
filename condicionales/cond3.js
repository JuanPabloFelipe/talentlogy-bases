//
var num1 = parseInt(prompt('Ingrese el primer número(que sea mayor que el segundo numero):'));
var num2 = parseInt(prompt('Ingrese el segundo número(que sea menor que el primer numero):'));

if (num1 % num2 === 0) {
  alert(`${num1} es múltiplo de ${num2}`);
} else {
  alert(`${num1} no es múltiplo de ${num2}`);
}