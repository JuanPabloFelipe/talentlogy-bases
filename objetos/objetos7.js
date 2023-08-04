/*Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, 
el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones
Añadir contacto
Lista de contactos
Buscar contacto
Editar contacto
Cerrar agenda
*/

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

const miAgenda = new Agenda();
miAgenda.añadirContacto("Juan fuentes", "123456789", "juan@gmail.com");
miAgenda.añadirContacto("Maria celis", "987654321", "maria@gmail.com");

miAgenda.mostrarContactos();

miAgenda.buscarContacto("Juan fuentes");

miAgenda.editarContacto("Maria celis", "555555555", "maria.lopez@gmail.com");

miAgenda.mostrarContactos();

miAgenda.cerrarAgenda();

