//Diseñar el algoritmo correspondiente a un programa, que:
//Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
//Carga la tabla con valores numéricos enteros.
//Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados 
//en pantalla.

const matriz = new Array(5);
for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(5);
}

matriz[0] = [1, 2, 3, 4, 5];
matriz[1] = [6, 7, 8, 9, 10];
matriz[2] = [11, 12, 13, 14, 15];
matriz[3] = [16, 17, 18, 19, 20];
matriz[4] = [21, 22, 23, 24, 25];

const sumaFilas = [];

for (let fila = 0; fila < matriz.length; fila++) {
    let sumaFila = 0;
    for (let columna = 0; columna < matriz[fila].length; columna++) {
      sumaFila += matriz[fila][columna];
    }
    sumaFilas.push(sumaFila);
}

console.log("Suma de cada fila:");
for (let fila = 0; fila < sumaFilas.length; fila++) {
  console.log("Fila " + (fila + 1) + ": " + sumaFilas[fila]);
}  

const sumaColumnas = new Array(5).fill(0);

for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {
      sumaColumnas[columna] += matriz[fila][columna];
    }
}

console.log("Suma de cada columna:");
for (let columna = 0; columna < sumaColumnas.length; columna++) {
  console.log("Columna " + (columna + 1) + ": " + sumaColumnas[columna]);
}

console.log(matriz);