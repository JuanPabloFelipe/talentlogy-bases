//Visualizar la tarifa de la luz según el gasto de corriente eléctrica. 
//Para un gasto  menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.

let gastoCorriente = parseFloat(prompt("Ingrese el gasto de corriente eléctrica en Kwxh:"));

let tarifa;

if (gastoCorriente < 1000) {
  tarifa = 1.2;
} else if (gastoCorriente >= 1000 && gastoCorriente <= 1850) {
  tarifa = 1.0;
} else {
  tarifa = 0.9;
}

console.log(`El gasto de corriente es ${gastoCorriente} Kwxh y la tarifa de la luz es ${tarifa}.`);
