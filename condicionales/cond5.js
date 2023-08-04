//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, 
//Suficiente, Bien, Excelente
var nota = parseFloat(prompt("ingrese calificacion del 0 al 10"));

if (nota >= 0 && nota < 5) {
    alert(`su nota de ${nota} es insuficiente`);
  } else if (nota >= 5 && nota < 7) {
    alert(`su nota de ${nota} es suficientes`);
  } else if (nota >= 7 && nota < 9) {
    alert(`su nota de ${nota} es buena`);
  } else if (nota >= 9 && nota <= 10) {
    alert(`su nota de ${nota} es exelente`);
  } else {
    alert("La nota ingresada no es válida");
  }
  
