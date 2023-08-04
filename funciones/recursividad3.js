//Pasar de número entero a número binario con Recursividad.

let num= parseInt(prompt("ingrese un numero "));

const binario =(n)=> {
    if(n>=2){
    return binario(Math.floor(n/2))+(n%2).toString();
}else{
    return n.toString()
}
}
console.log(binario(num))

