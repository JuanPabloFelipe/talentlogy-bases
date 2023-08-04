/*Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. 
Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir 
los resultados obtenidos. Llamar a la clase Calculadora. */


class Calculadora {
    constructor(num1, num2){
        this.num1= num1;
        this.num2= num2;
    }

    sumar() {
        let resultado=(this.num1+this.num2);
        console.log(`el resultado de su suma es ${resultado}`)
    }

    restar() {
        let resultado=(this.num1-this.num2);
        console.log(`el resultado de su resta es ${resultado}`)
    }

    multiplicar() {
        let resultado=(this.num1*this.num2);
        console.log(`el resultado de su multiplicacion es ${resultado}`)
    }

    dividir() {
        if (this.num2===0){
            console.log("Error: No se puede dividir entre cero.");
        }else{
        let resultado=(this.num1/this.num2);
        console.log(`el resultado de su division es ${resultado}`);
        }
    }
}

const prueba =() =>{

    const num1=parseInt(prompt("ingrese el valor del primer numero"));
    const num2=parseInt(prompt("ingrese el valor del segundo numero"));

    const numerosCalculadoira= new Calculadora (num1, num2);

    numerosCalculadoira.sumar();
    numerosCalculadoira.restar();
    numerosCalculadoira.multiplicar();
    numerosCalculadoira.dividir();
}

prueba()