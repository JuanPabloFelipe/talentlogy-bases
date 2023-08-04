//Escriba un programa que reciba cuatro calificaciones de un estudiante y
//devuelva el promedio y la máxima y la mínima calificación.
 
var nota1= parseInt(prompt("ingrese primera nota"));
var nota2= parseInt(prompt("ingrese segunda nota"));
var nota3= parseInt(prompt("ingrese tercera nota"));
var nota4= parseInt(prompt("ingrese cuarta nota"));

var promedionotas= parseInt((nota1+nota2+nota3+nota4)/4);

var maxn =parseInt(Math.max(nota1, nota2, nota3, nota4))

var mixn = parseInt(Math.min(nota1, nota2, nota3, nota4))


alert (`sus promedio de notas es ${promedionotas}, su nota minima es ${mixn} y su nota maxima es ${maxn}`);

    