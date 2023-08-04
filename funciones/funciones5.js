//Hacer un programa que pida por pantalla una temperatura en grados Celsius, 
//muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
//Celsius a Fahrenheit: F = (9*C)/5 + 32;
//Celsius a Kelvin: K = C + 273.15;


function menu(){
    alert("convertir a grados Fahrenheit=>1, convertir a grados Kelvin=>2 ")
}

const Fahrenheit=() =>{
    let grados = parseInt(prompt("igrese temperatura en grados Celsius"));
    grados=((9*grados)/5 + 32);
    alert(`su temperatura en grados Fahrenheit es ${grados} `);
}

function Kelvin() {
    let grados = parseInt(prompt("igrese temperatura en grados Celsius"));
    grados=(grados + 273.15);
    alert(`su temperatura en grados Kelvin es ${grados} `);
}

let opcion=0
while (opcion!==2) {
    menu()
    let opcion=parseInt(prompt("ingrese la opcion elegida"));
    if(opcion==1){
        Fahrenheit();
    }else if (opcion==2) {
        Kelvin();
    } else {
        alert("su opcion ingresada no es correcta");
    }
}