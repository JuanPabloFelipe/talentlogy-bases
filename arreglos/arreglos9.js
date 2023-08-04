/*Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
Todos los alumnos mayores de edad.
Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
*/



const leerAlumnos = () => {
    const alumnos = [];
    let nombre = prompt("Ingrese el nombre del alumno (o '*' para terminar):");

    while (nombre !== "*") {
        const edad = parseInt(prompt("Ingrese la edad del alumno:"));
        alumnos.push({ nombre, edad });
        nombre = prompt("Ingrese el nombre del siguiente alumno (o '*' para terminar):");
    }

    return alumnos;
};

const filtrarMayoresDeEdad = alumnos => alumnos.filter(alumno => alumno.edad >= 18);

const encontrarEdadMayor = alumnos => alumnos.reduce((maxEdad, alumno) => Math.max(maxEdad, alumno.edad), 0);

const obtenerAlumnosEdadMayor = (alumnos, edadMayor) => alumnos.filter(alumno => alumno.edad === edadMayor);

const mostrarAlumnos = alumnos => {
    console.log("Alumnos mayores de edad:");
    const mayoresDeEdad = filtrarMayoresDeEdad(alumnos);
    mayoresDeEdad.forEach(alumno => {
        console.log(`Nombre: ${alumno.nombre}, Edad: ${alumno.edad}`);
    });

    const edadMayor = encontrarEdadMayor(alumnos);
    console.log(`\nEdad mayor encontrada: ${edadMayor}`);
    const alumnosEdadMayor = obtenerAlumnosEdadMayor(alumnos, edadMayor);
    console.log("Alumnos con la edad mayor:");
    alumnosEdadMayor.forEach(alumno => {
        console.log(`Nombre: ${alumno.nombre}, Edad: ${alumno.edad}`);
    });
};

const prueba = () => {
    console.log("Ingrese el nombre y la edad de cada alumno. (* para terminar)");

    const alumnos = leerAlumnos();
    mostrarAlumnos(alumnos);
};
prueba();
