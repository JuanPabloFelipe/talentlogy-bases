//Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo. 
let horas = parseInt(prompt("ingrese las horas trabajadas"));
let valorh = parseInt(prompt("ingrese el valor de las horas trabajadas"))
let salario= (horas*valorh);
alert (`su salario es de ${salario}`);