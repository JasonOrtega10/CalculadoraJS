var operandoa;
var operandob;
var operacion;
function init() {
    /* VARIABLES */
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multi = document.getElementById('multi');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    /* EVENTOS */
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent; /* Esta linea lo que hace es guardar el contenido que esta en resultado en la variable operandoa */
        operacion= "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent; /* Esta linea lo que hace es guardar el contenido que esta en resultado en la variable operandoa */
        operacion= "-";
        limpiar();
    }
    multi.onclick = function(e){
        operandoa = resultado.textContent; /* Esta linea lo que hace es guardar el contenido que esta en resultado en la variable operandoa */
        operacion= "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent; /* Esta linea lo que hace es guardar el contenido que esta en resultado en la variable operandoa */
        operacion= "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent; /* Esta linea lo que hace es guardar el contenido que esta en resultado en la variable operandoa */
        resolver();
    }   
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = 0;
}
function resolver(){
    var result = 0;
    switch(operacion){
        case "+":
            result = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            result = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            result = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            result = parseFloat(operandoa) / parseFloat(operandob);
            break; 
    }
    resetear();
    resultado.textContent = result;

}