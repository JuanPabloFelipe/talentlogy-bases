//Escribir un programa que pregunte el nombre completo del usuario en la consola y después 
//muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, 
//otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. 
//El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.

let nombreCompleto = prompt("ingrese su nombre completo (El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.)");

const nombreMayus = (nombre) => { return nombre.toLowerCase() }

const nombreMin = (nombre) => { return nombre.toUpperCase() }

const capitalizeName=(name)=> {
    
    const nombre = name.toLowerCase().split(" ");

    for (let i = 0; i < nombre.length; i++) {
        nombre[i] = nombre[i].charAt(0).toUpperCase() + nombre[i].slice(1);
    }

    const capitalizedName = nombre.join(" ");

    return capitalizedName;
}


console.log("nombre completo en minusculas")
console.log(nombreMayus(nombreCompleto));

console.log("nombre completo en mayusculas");
console.log(nombreMin(nombreCompleto));

console.log("nombre la primera letra del nombre y de los apellidos en mayúscula")
console.log(capitalizeName(nombreCompleto));
