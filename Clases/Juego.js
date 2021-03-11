
class Juego {
    constructor(numeroRespuestas, numMin, numMax){
        this.numeroRespuestas = numeroRespuestas;
        this.numMin = numMin;
        this.numMax = numMax;
    }
}

// *****************************************************
// -------------- ADIVINA EL NUMERO --------------------
// *****************************************************

class AdivinaElNumero extends Juego {
    constructor(numeroRespuestas, numMin, numMax, dificultad, contadorRespuestas){
        super(numeroRespuestas, numMin, numMax);
        this.numeroRespuestas = 0;
        this.numMin = 0;
        this.dificultad = dificultad;
        this.contadorRespuestas = 10;
    }

    empieza() {
        console.log("HEMOS EMPEZADO EL JUEGO");
        document.getElementById("Empezar").hidden = true;
        document.getElementById("Enviar").hidden = false;
        document.getElementById("Contenido").hidden = false;

        if (document.getElementById("facil").checked) {
            this.dificultad = Math.floor(Math.random() * 10) + 1;
            this.numMax = 11;
            console.log(this.dificultad);
        } else if(document.getElementById("medio").checked){
            this.dificultad = Math.floor(Math.random() * 50) + 1;
            this.numMax = 51;
            console.log(this.dificultad);
        } else if (document.getElementById("dificil").checked){
            this.dificultad = Math.floor(Math.random() * 100) + 1;
            this.numMax = 101;
            console.log(this.dificultad);
        }
    }

    verificar(){

        if (this.contadorRespuestas != this.numeroRespuestas) {

            var numero = document.getElementById("numero").value;
    
            if (numero > this.numMin && numero < this.numMax) {
    
                this.contadorRespuestas--;
    
                document.getElementById("contador").innerHTML = "<b>NÚMERO DE FALLOS RESTANTES : " + this.contadorRespuestas;
    
                if (numero == this.dificultad) {
    
                    var respuesta = "<h1 style='color: green;'>" + numero + " - ES EL CORRECTO!! </h1>";
                    document.getElementById("Enviar").disabled = true;
    
                } else if (numero > this.dificultad) {
    
                    var respuesta = (numero + " - El numero que buscas es inferior");
    
                } else if (numero < this.dificultad) {
    
                    var respuesta = numero + " - El numero que buscas es superior";
                }
    
            }
    
            document.getElementById("respuesta").innerHTML = "<br>" + respuesta;
    
        } else {
    
            var divRespuesta = document.getElementById("respuesta");
            divRespuesta.disabled = true;
            divRespuesta.innerHTML = ("<br> <h4>NO TIENES MAS INTENTOS, EL NUMERO CORRECTO ERA EL <i>" + this.dificultad + "</i></h4>");
    
            divRespuesta.style = "color: red";
    
        }
    }

}

const r1 = new AdivinaElNumero();

// *****************************************************
// -------------- ADIVINA MI NUMERO --------------------
// *****************************************************

class AdivinaMiNumero extends Juego {
    constructor(numeroRespuestas, numMin, numMax, contadorRespuestasG, contadorRespuestasP, startNum){
        super(numeroRespuestas, numMin, numMax);
        this.numeroRespuestas = 0;
        this.numMin = 0;
        this.contadorRespuestasG = contadorRespuestasG;
        this.contadorRespuestasP = contadorRespuestasP;
        this.startNum = startNum;
    }

    start(){
        console.log("HEMOS EMPEZADO EL JUEGO");
        document.getElementById("Empezar").disabled = true;
        document.getElementById("MasGrande").hidden = false;
        document.getElementById("MasPeque").hidden = false;
        document.getElementById("MiNumero").hidden = false;
        document.getElementById("titulo").hidden = false;
        this.contadorRespuestasG = 0;
        this.contadorRespuestasP = 0;

        if (document.getElementById("facil").checked) {
            this.numMax = 10;
        } else if(document.getElementById("medio").checked){
            this.numMax = 50;
        } else if (document.getElementById("dificil").checked){
            this.numMax = 100;
        }

        this.startNum = (this.numMax / 2);
        document.getElementById("Numero").innerHTML = this.startNum;

        
    }

    adivinarGrande(){
    
        this.contadorRespuestasG++;
    
        var numActualStng = document.getElementById("Numero").innerHTML;
        var numActual = parseInt(numActualStng); 
    
        this.numMin = numActual;
    
        var numCalc = (this.numMin + this.numMax) / 2;
        var numNuevo = Math.round(numCalc);
    
        document.getElementById("Numero").innerHTML = numNuevo;
    
        document.getElementById("pistas").innerHTML = ("Mínimo: " + this.numMin + " Máximo: " + this.numMax);
        document.getElementById("pistas").style = "font-style: italic; color: grey; font-size: 20px;"
    }

    adivinarPeque(){
        this.contadorRespuestasP++;
    
        var numActualStng = document.getElementById("Numero").innerHTML;
        var numActual = parseInt(numActualStng); 
    
        this.numMax = numActual;
    
        var numCalc = (this.numMax + this.numMin) / 2;
        var numNuevo = Math.round(numCalc);
        
        document.getElementById("Numero").innerHTML = numNuevo;
    
        document.getElementById("pistas").innerHTML = ("Mínimo: " + this.numMin + " Máximo: " + this.numMax);
        document.getElementById("pistas").style = "font-style: italic; color: grey; font-size: 20px;"
    }

    miNumero() {
    
        var miNum = document.getElementById("Numero");
        var miText = document.getElementById("respuesta");
        
        miNum.style = "color: green; font-size: 25px;";
        miText.innerHTML = "HE ADIVINADO TU NUMERO EN " + (this.contadorRespuestasG + this.contadorRespuestasP) + " INTENTOS!!";
        miText.style = "color: green; font-size: 25px;";
        
        document.getElementById("MiNumero").disabled = true;
        document.getElementById("MasGrande").disabled = true;
        document.getElementById("MasPeque").disabled = true;
    
    }

}

const r2 = new AdivinaMiNumero();