/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
Crea sus métodos get, set y toString.
Tendrá dos métodos especiales:
ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, 
no se hará nada.
retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual 
a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
*/

class Cuenta {
    
    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this.cantidad += cantidad;
        } 
    }

    retirar(cantidad) {
        if (cantidad > 0) {
            this.cantidad = Math.max(0, this.cantidad - cantidad);
        } 
    }

  getTitular() {
    return this.titular;
  }

  getCantidad() {
    return this.cantidad;
  }

  setTitular(titular) {
    this.titular = titular;
  }

  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }

  toString() {
    return `Titular: ${this.titular}, Cantidad: ${this.cantidad}`;
  }
}

const miCuenta = new Cuenta("Juan Pérez", 1000);
console.log(miCuenta.toString()); 

miCuenta.ingresar(500);
console.log(miCuenta.toString()),

miCuenta.retirar(2000);
console.log(miCuenta.toString()); 


