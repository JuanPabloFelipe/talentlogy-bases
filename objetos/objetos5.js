/* Realizar un programa que tenga una clase Persona con las siguientes características. 
La clase tendrá como atributos el nombre y la edad de una persona. 
Implementar los métodos necesarios para inicializar los atributos, 
mostrar los datos e indicar si la persona es mayor de edad o no.  */


class persona {

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    atributos(){
        console.log(`el nombre de la persona es ${this.nombre} y la edad es ${this.edad}`);
    }

    mayorDeEdad(){
        if(this.edad>=18){
            console.log(`${this.nombre} es mayor de edad tiene ${this.edad}`);
        }else{
            console.log(`${this.nombre} es menor de edad tiene ${this.edad}`);
        }
    }

}

const prueba = () =>{

    const persona1 = new persona("juan", 18);
    const persona2 = new persona("ana", 16);
    const persona3 = new persona("pedro", 21);

    persona1.atributos();
    persona2.atributos();
    persona3.atributos();

    persona1.mayorDeEdad();
    persona2.mayorDeEdad();
    persona3.mayorDeEdad();
}

prueba()