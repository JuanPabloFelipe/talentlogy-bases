

/*
class Persona {

    nombre;
    edad;
    mayorEdad;
    plata = 0

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad= edad
        this.determinarMayorEdad(edad)
    }

    getNombre(){
      return this.nombre;
    }
    setNombre(nombre){
      this.nombre = nombre;
    }

    determinarMayorEdad (edad) {
        this.mayorEdad=edad>=18
    }
    
    transferencia (plata){
        console.log('vivas recibio ' + plata)
        this.plata = plata
    }

}

const persona1 = new Persona('vivas', 17);

persona1.transferencia(5000)*/

class Contacto {
  constructor(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }
}

class Agenda {
  constructor() {
    this.contactos = [];
  }

  añadirContacto(nombre, telefono, email) {
    const nuevoContacto = new Contacto(nombre, telefono, email);
    this.contactos.push(nuevoContacto);
    console.log(`Contacto ${nombre} añadido a la agenda.`);
  }

  mostrarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((contacto, index) => {
      console.log(`${index + 1}. Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}`);
    });
  }

  buscarContacto(nombre) {
    const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
    if (contactoEncontrado) {
      console.log(`Contacto encontrado - Nombre: ${contactoEncontrado.nombre}, Teléfono: ${contactoEncontrado.telefono}, Email: ${contactoEncontrado.email}`);
    } else {
      console.log(`Contacto con nombre ${nombre} no encontrado.`);
    }
  }

  editarContacto(nombre, nuevoTelefono, nuevoEmail) {
    const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
    if (contactoEncontrado) {
      contactoEncontrado.telefono = nuevoTelefono;
      contactoEncontrado.email = nuevoEmail;
      console.log(`Contacto ${nombre} actualizado.`);
    } else {
      console.log(`Contacto con nombre ${nombre} no encontrado.`);
    }
  }

  cerrarAgenda() {
    console.log("Agenda cerrada.");
  }
}

// Ejemplo de uso
const miAgenda = new Agenda();
miAgenda.añadirContacto("Juan Perez", "123456789", "juan@example.com");
miAgenda.añadirContacto("Maria Lopez", "987654321", "maria@example.com");

miAgenda.mostrarContactos();

miAgenda.buscarContacto("Juan Perez");

miAgenda.editarContacto("Maria Lopez", "555555555", "maria.lopez@example.com");

miAgenda.mostrarContactos();

miAgenda.cerrarAgenda();
