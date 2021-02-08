var numeroAdivinar = Math.floor((Math.random()*100)+1);
console.log(numeroAdivinar);
var numeroRespuestas = 0;
var contadorRespuestas = 10;
var numMax = 100;
var numMin = 1;

function adivinalo() {
    
    if(contadorRespuestas != numeroRespuestas){
        
        var numero = document.getElementById("numero").value;       
        
        if(numero > numMin && numero < numMax){} {
            
            contadorRespuestas--;
            console.log(contadorRespuestas);
            
            document.getElementById("contador").innerHTML = "<b>NÚMERO DE FALLOS RESTANTES : " + contadorRespuestas;
            
            if (numero == numeroAdivinar) {
                
                var respuesta = "<h1 style='color: green;'>" + numero + " - ES EL CORRECTO!! </h1>";
                document.getElementById("Enviar").disabled=true;
                
            } else if(numero > numeroAdivinar) {

                var respuesta = (numero + " - El numero que buscas es inferior");
                numMax = numero;
                console.log("Tu numero está entre el " + numMin + " y el " + numMax);
                
            } else if(numero < numeroAdivinar) {

                var respuesta = numero + " - El numero que buscas es superior";
                numMin = numero;
                console.log("Tu numero está entre el " + numMin + " y el " + numMax);
            }
            
        }

        document.getElementById("respuesta").innerHTML = "<br>" + respuesta;

    } else {
        
        divRespuesta = document.getElementById("respuesta");
        divRespuesta.disabled=true;
        divRespuesta.innerHTML = "<br> <h1>NO TIENES MAS INTENTOS</h1>";
        
        divRespuesta.style = "color: red";
        
    }
    
    

}

 
