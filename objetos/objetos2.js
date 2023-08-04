//Crea una clase Contador con los métodos para incrementar y decrementar el contador. 
//La clase contendrá un constructor por defecto y los métodos getters y setters.

class Contador {

    valor = 0;
   
    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    getObtenerValor() {
        return this.valor;
    }

    setEstablecerValor(nuevoValor) {
        this.valor = nuevoValor;
    }
}


const miContador = new Contador();

console.log(miContador.getObtenerValor()); 

miContador.incrementar();
miContador.incrementar();
miContador.incrementar();

console.log(miContador.getObtenerValor()); 

miContador.decrementar();

console.log(miContador.getObtenerValor());

miContador.setEstablecerValor(10);

console.log(miContador.getObtenerValor()); 