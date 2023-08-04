//Serie Fibonacci con Recursividad: 1.1.2.3.5.8…


let num = parseInt(prompt("ingresa un numero"));

const Fibonacci= n => {
   
    if (n <2) return n;
    return (Fibonacci(n - 2) + Fibonacci(n - 1));
}

for (let i=2; i < num; i++){
   console.log(Fibonacci(i))
}
