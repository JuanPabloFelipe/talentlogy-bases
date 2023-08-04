//Escribir un programa que imprima todos los números pares entre dos números que se le pida al usuario.

let num=parseInt(prompt(`ingresa un numero`))
let num1=parseInt(prompt(`ingresa un numero`))

for (i=num+1;i<num1;i++){
    
    if (i%2==0){
        console.log(`${i}`)
    }
}
