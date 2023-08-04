//Hacer un programa que muestre un menú con las opciones 
//sumar, restar, multiplicar y dividir, el programa solicitará una opción y realizará la tarea elegida, 
//se debe usar procedimientos.

function mostrarmenu(){
alert("opciones:1.sumar 2.restar 3.dividir 4.multiplicar 5.salir")
}

function sumar() {
    let num1=parseInt(prompt("ingrese un numero"));
    let num2=parseInt(prompt("ingrese un numero"));
    let resultado=(num1+num2);
    alert(`el resultado de su suma es ${resultado}`)
}

function restar() {
    let num1=parseInt(prompt("ingrese un numero"));
    let num2=parseInt(prompt("ingrese un numero"));
    let resultado=(num1-num2);
    alert(`el resultado de su resta es ${resultado}`)
}

function dividir() {
    let num1=parseInt(prompt("ingrese un numero"));
    let num2=parseInt(prompt("ingrese un numero"));
    let resultado=(num1/num2);
    alert(`el resultado de su division es ${resultado}`)
}

function multiplicar() {
    let num1=parseInt(prompt("ingrese un numero"));
    let num2=parseInt(prompt("ingrese un numero"));
    let resultado=(num1*num2);
    alert(`el resultado de su multiplicacion es ${resultado}`)
}
let opcion=0

while (opcion!==5) {
    
    mostrarmenu()
    let opcion = parseInt(prompt("elije un numero de las opciones anteriormente mostradas"));
    
    if (opcion==1){
        sumar()
    }else if (opcion==2){
        restar()
    } else if(opcion==3){
        dividir()
    } else if(opcion==4){
        multiplicar()
    }else if(opcion==5){
        alert("saleindo del programa");
    }
}
