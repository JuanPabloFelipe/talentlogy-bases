//Escribir un programa que pregunte al usuario la fecha de su nacimiento 
//en formato dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. 
//Adaptar el programa anterior para que también funcione cuando el día o el mes se introduzcan 
//con un solo carácter.

function obtenerFechaNacimiento() {
    let fecha = prompt("Ingrese su fecha de nacimiento en formato dd/mm/aaaa:");

    if (fecha === null || fecha === "") {
        alert("No se ingresó ninguna fecha.");
        return;
    }

    let partesFecha = fecha.split('/');

    if (partesFecha.length !== 3) {
        alert("Fecha inválida. Debe ingresar la fecha en formato dd/mm/aaaa.");
        return;
    }

    let dia = partesFecha[0];
    let mes = partesFecha[1];
    let anio = partesFecha[2];

    dia = dia.padStart(2, '0');
    mes = mes.padStart(2, '0');

    alert(`Día: ${dia} Mes: ${mes} Año: ${anio}`);
}

obtenerFechaNacimiento();