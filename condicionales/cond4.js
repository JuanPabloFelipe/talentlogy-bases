//Pedir dos números y decir cual es el mayor
var num1 = parseInt (prompt("ingrese un numero"));
var num2 = parseInt (prompt("ingrese un numero"));
if (num1>num2) {
 alert(`${num1} es mayor que ${num2}`);

} else if (num1<num2){
alert(`${num2} es mayor que ${num1}`); 
}else{ 
    alert(`${num1} son iguales ${num2}`);
}