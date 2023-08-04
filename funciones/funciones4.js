//Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un procedimiento muestre por pantalla el número escrito en letras.




function uno(){
    alert ("uno");
}

function dos(){
    alert ("dos");
}

function tres(){
    alert ("tres");
}

function cuatro(){
    alert ("cuatro");
}

function cinco(){
    alert ("cinco");
}

function seis(){
    alert ("seis");
}

function siete(){
    alert ("siete");
}

function ocho(){
    alert ("cocho");
}

function nueve(){
    alert ("nueve");
}

function diez(){
    alert ("diez");
}

let num = 0

while (num!==10){

    let num=prompt("ingrese un numero del 1 al 10");

   if (num==1){
    uno()
   }else if (num==2){
    dos()
   }else if (num==3){
    tres()
   }else if (num==4){
    cuatro()
   }else if (num==5){
    cinco()
   }else if (num==6){
    seis()
   }else if (num==7){
    siete()
   }else if (num==8){
    ocho()
   }else if (num==9){
    nueve()
   }else if (num==10){
    diez()
   }else{
    alert("no ingreso un numero de 1 a 10")
   }


}
