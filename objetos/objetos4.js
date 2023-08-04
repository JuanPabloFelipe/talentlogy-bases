/* Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre 
y la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos 
y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´ */


class alumno {

    constructor( nombre,nota) {
        this.nombre=nombre
        this.nota=nota
    }

    imprimirInformacion(){
        console.log(`el nombre del estudiante es ${this.nombre}`);
        console.log(`la nota del estudante es ${this.nota}`);
    }

    aprovadoReprovado(){
        if(this.nota>=5){
            console.log(`el estudiante ${this.nombre} con la nota de ${this.nota} ha aprovado`)
        }else{
            console.log(`el estudiante ${this.nombre} con la nota de ${this.nota} ha reporvado`)
        }
    } 

}

const prueba = ()=>{

const alumno1 = new alumno ("juan", 8.9);
const alumno2 = new alumno ("ana",4.7);

alumno1.imprimirInformacion();
alumno2.imprimirInformacion();

alumno1.aprovadoReprovado();
alumno2.aprovadoReprovado();
}

prueba()