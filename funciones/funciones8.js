//Hacer un programa que muestre 3 números ordenados descendentemente, utilizar un procedimiento 
//para cada operación.

const obtenerNumeros=()=> {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
    const num3 = parseFloat(prompt("Ingrese el tercer número:"));
    return { num1, num2, num3 };
}

function ordenarDescendentemente(a, b, c) {
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    if (b < c) {
        let temp = b;
        b = c;
        c = temp;
    }
    if (a < b) {
        let temp = a;
        a = b;
        b = temp;
    }
    console.log(`Los números ordenados descendentemente son: ${a}, ${b}, ${c}`);
}

const prueba =()=>{
    console.log("Ingrese tres números para ordenar descendentemente:");
    const { num1, num2, num3 } = obtenerNumeros();
    ordenarDescendentemente(num1, num2, num3);
}

prueba();
