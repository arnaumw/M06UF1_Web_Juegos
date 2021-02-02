// Generamos numero aleatorio entre el 1 y el 100.

var numeroAdivinar = Math.floor((Math.random()*100)+1);
console.log(numeroAdivinar);
var contadorRespuestasG = 0;
var contadorRespuestasP = 0;

var numMax = 100;
var numMin = 0;
var startNum = numMax / 2;
var numAnterior = startNum;


function empieza() {
    console.log("HEMOS EMPEZADO EL JUEGO");
    document.getElementById("Empezar").disabled = true;
    document.getElementById("MasGrande").hidden = false;
    document.getElementById("MasPeque").hidden = false;
    document.getElementById("MiNumero").hidden = false;
    document.getElementById("titulo").hidden = false;
    document.getElementById("Numero").innerHTML = startNum;
}

function adivinarGrande(){
    
    contadorRespuestasG++;
    
    var numActualStng = document.getElementById("Numero").innerHTML;
    var numActual = parseInt(numActualStng); 
    
    numMin = numActual;
    
    var numCalc = (numMin + numMax) / 2;
    var numNuevo = Math.round(numCalc);
    
    if ((contadorRespuestasG + contadorRespuestasP) > 9){
        var miNum = document.getElementById("Numero");
        var miText = document.getElementById("respuesta");
    
        miNum.style = "color: red; font-size: 25px;";
        miText.innerHTML = "GAME OVER! DEMASIADOS INTENTOS...";
        miText.style = "color: red; font-size: 25px;";
    
        document.getElementById("MiNumero").disabled = true;
        document.getElementById("MasGrande").disabled = true;
        document.getElementById("MasPeque").disabled = true;
    }
    
    document.getElementById("Numero").innerHTML = numNuevo;
    
    console.log("NumMin : " + numMin + ", NumMax: " + numMax);
    
}

function adivinarPeque(){
    
    contadorRespuestasP++;
    
    var numActualStng = document.getElementById("Numero").innerHTML;
    var numActual = parseInt(numActualStng); 
    
    numMax = numActual;
    
    var numCalc = (numMax + numMin) / 2;
    var numNuevo = Math.round(numCalc);
    
    if ((contadorRespuestasG + contadorRespuestasP) > 9){
        var miNum = document.getElementById("Numero");
        var miText = document.getElementById("respuesta");
    
        miNum.style = "color: red; font-size: 25px;";
        miText.innerHTML = "GAME OVER! DEMASIADOS INTENTOS...";
        miText.style = "color: red; font-size: 25px;";
    
        document.getElementById("MiNumero").disabled = true;
        document.getElementById("MasGrande").disabled = true;
        document.getElementById("MasPeque").disabled = true;
    }
    
    document.getElementById("Numero").innerHTML = numNuevo;
    
    console.log("NumMin : " + numMin + ", NumMax: " + numMax);
}

function miNumero() {
    
    var miNum = document.getElementById("Numero");
    var miText = document.getElementById("respuesta");
    
    miNum.style = "color: green; font-size: 25px;";
    miText.innerHTML = "HE ADIVINADO TU NUMERO EN " + (contadorRespuestasG + contadorRespuestasP) + " INTENTOS!!";
    miText.style = "color: green; font-size: 25px;";
    
    document.getElementById("MiNumero").disabled = true;
    document.getElementById("MasGrande").disabled = true;
    document.getElementById("MasPeque").disabled = true;

}