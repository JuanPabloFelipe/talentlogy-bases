//Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, 
//el número se pedirá en el programa principal. Usar procedimiento.

function tablade_multiplicar(){
    let num =parseInt(prompt(`ingrese un numero`))
    alert (`la tabla de multiplicar de ${num} es:`);

    for (i=1; i<=20 ; i++ ){
        mul=(num * i)
        console.log(`${mul}`)
    }
    
}
tablade_multiplicar()
