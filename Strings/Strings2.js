//Escribir un programa que pregunte el nombre del usuario en la consola y 
//después de que el usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, 
//donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras que tienen el nombre.

let nombre = prompt("ingrese su nombre");

const nombreMan = (name) => { return name.toUpperCase() }


const numeroLertras=(name)=> {
    
    const letras = name.split(" ");
    
    for (let i = 0; i < letras.length; i++) {
        letras[i] = letras[i].slice(0);
    }
    
    const numeroLertras = letras.join(" ");
    
    return numeroLertras;
}

const nombremayus = nombreMan(nombre);
const numLet = numeroLertras(nombre)

console.log(`${nombremayus} tiene ${numLet.length}`);
