//Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un constructor 
//por defecto y los métodos getters y setters.

class Cuenta{
    saldo=0
    

 setIngreso(cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      return true;
    } else {
      console.log("La cantidad ingresada debe ser mayor que cero.");
      return false;
    }
  }
 
 setReintegro(cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      return true;
    } else {
      console.log("La cantidad a reintegrar debe ser mayor que cero y menor o igual al saldo actual.");
      return false;
    }
  }

 Transferencia(cuentaDestino, cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
      cuentaDestino.setIngreso(cantidad);
      return true;
    } else {
      console.log("La cantidad a transferir debe ser mayor que cero y menor o igual al saldo actual.");
      return false; 
    }

}
}


const cuenta1 = new Cuenta();
const cuenta2 = new Cuenta();

cuenta1.setIngreso(1000);
cuenta2.setIngreso(500);
cuenta1.Transferencia(cuenta2, 300);

console.log("Saldo cuenta1:", cuenta1.saldo); // Salida: 700
console.log("Saldo cuenta2:", cuenta2.saldo); // Salida: 800