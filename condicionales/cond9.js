//Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, 
//y cuál es el menor. (Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)

var num1= parseInt(prompt("ingrese un numero "))
var num2= parseInt(prompt("ingrese un numero "))
var num3= parseInt(prompt("ingrese un numero "))

var mayor = (Math.max(num1, num2, num3))
var menor = (Math.min(num1,num2,num3))
