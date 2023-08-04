//Construir un programa que calcule y visualice por pantalla el factorial de todos los valores 
//numéricos enteros entre 1 y 10.

let num= parseInt(prompt("ingrese un numero del 1 al 10"));
let factorial=1
for (let x=1;x<=num; x++){
    (factorial*=x)
}
alert(`valor factorial del numero ingresado ${factorial}`)

