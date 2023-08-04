//Hacer un Programa que calcule áreas de trapecios. 
let base_inferior= parseInt(prompt("ingrese el valor de la base inferior"));
let base_superior= parseInt(prompt("ingrese el valor de la base superior"));
let altura= parseInt(prompt("ingresa la altura del trapecio"));
let area= (((base_inferior+base_superior)*altura)/2)
alert (`el area del trapecio es de ${area}`);
