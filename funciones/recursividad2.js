//Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.


let num = parseInt(prompt("ingrese un numero"))


const paraAtras = (a) => { 
    if(a < 0) return "";
    return a  + " " + paraAtras(a-1);}
    console.log(paraAtras(num));
  
    const imprimirNumeros=(n)=> {
        if (n < 0) return n;
         console.log(n)
         return imprimirNumeros(n - 1)  
        
    }