//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados 
//y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.

const notas =[5, 7, 19, 14, 9, 5, 12, 11, 14, 9, 7, 15, 5, 12, 3, 4];

const aprovado = notas.filter((a)=> a>10);
const reprovado = notas.filter((a)=> a<10);

let suma=0
let media_aprovada=0
let media_reprovada=0
for(let i=0;i<aprovado.length; i++) {
suma = suma + parseInt(aprovado[i]);
}
media_aprovada = (suma/aprovado.length);


for(let i=0;i<reprovado.length; i++) {
suma = suma + parseInt(reprovado[i]);
}
media_reprovada = (suma/reprovado.length);

console.log(aprovado);
console.log(reprovado);

console.log(`la cantidad de notas aprovadas son ${aprovado.length}`);
console.log(`la cantidad de notas reprovadas son ${reprovado.length}`);

console.log(`el promedio de los notas aprovados es ${media_aprovada.toFixed(2)}`)
console.log(`el promedio de los notas reprovados es ${media_reprovada.toFixed(2)}`)


