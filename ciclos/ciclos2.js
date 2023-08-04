//Un bucle while que a partir de una variable “contador” que toma valores de 1 a 5, 
//muestre por pantalla el doble del valor de “contador”, es decir, que muestre 2, 4, 6, 8, 10.

let contador = parseInt(prompt("ingrese un numero del 1-5"));

while(contador<=5){
    alert (contador*2)
    contador++;
}

