//Escribir un programa que dado un número entero positivo n, calcule la suma de la 
//siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n

let num = parseInt(prompt("ingrese un numero entero pisitivo"))
let sumatotal=0
for(let i=1; i<=num; i++){
(sumatotal += 1/i)
}
alert(`la suma de su serie es ${sumatotal}`);
