//Ingrese un número y calcule e imprima su raíz cuadrada. 
//Si el número es negativo  imprima el número y un mensaje que diga “tiene raíz imaginaria”
let numero = parseInt(prompt("Ingresa un número"));
let raizCuadrada = Math.sqrt(numero).toFixed(2);
if (raizCuadrada>0) { alert(`su raiz cuadrada es ${raizCuadrada} `)
    
} else { alert (`${numero} tiene una raiz imaginaria`)
    
}
