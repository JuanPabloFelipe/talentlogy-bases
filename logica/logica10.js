//Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).
let nota1= parseInt(prompt("ingrese la primera nota"));
let nota2= parseInt(prompt("ingrese la segunda nota"));
let nota3= parseInt(prompt("ingrese la tercera nota"));
let nota4= parseInt(prompt("ingrese la cuarta nota"));
let nota5= parseInt(prompt("ingrese la quinta nota"));
let promedio = ((nota1+nota2+nota3+nota4+nota5)/5);
if (promedio> 10.5) {
    alert(`aprobo, su promedio es de ${promedio}`)
} else {
    alert(`no aprovo, su promedio es de ${promedio}`)
}