/* Desarrollar un programa que cargue los datos de un triángulo. 
Implementar una clase con los métodos para inicializar los atributos, 
imprimir el valor del lado con un tamaño mayor y  el tipo de triángulo que es 
(equilátero, isósceles o escaleno). */

class Triangulo {
    constructor(a, b, c) {
        this.ladoA = a;
        this.ladoB = b;
        this.ladoC = c;
    }

    imprimirLadoMayor() {
        const mayor = Math.max(this.ladoA, this.ladoB, this.ladoC);
        console.log(`El lado con tamaño mayor es: ${mayor}`);
    }

    obtenerTipoTriangulo() {
        if (this.ladoA === this.ladoB && this.ladoB === this.ladoC) {
            console.log("El triángulo es equilátero.");
        } else if (this.ladoA === this.ladoB || this.ladoB === this.ladoC || this.ladoA === this.ladoC) {
            console.log("El triángulo es isósceles.");
        } else {
            console.log("El triángulo es escaleno.");
        }
    }
}

function main() {
    const ladoA = parseFloat(prompt("Ingrese el valor del lado A:"));
    const ladoB = parseFloat(prompt("Ingrese el valor del lado B:"));
    const ladoC = parseFloat(prompt("Ingrese el valor del lado C:"));

    const miTriangulo = new Triangulo(ladoA, ladoB, ladoC);

    miTriangulo.imprimirLadoMayor();
    miTriangulo.obtenerTipoTriangulo();
}

main();

