var numeroAdivinar = Math.floor((Math.random()*10)+1);
console.log(numeroAdivinar);
var numeroRespuestas = 0;
var contadorRespuestas = 5;

function adivinalo() {
    
    if(contadorRespuestas != numeroRespuestas){
        
        var numero = document.getElementById("numero").value;       
        
        if(numero > 0 && numero < 10) {
            
            contadorRespuestas--;
            console.log(contadorRespuestas);
            
            document.getElementById("contador").innerHTML = "<b>NÚMERO DE FALLOS RESTANTES : " + contadorRespuestas;
            
            if (numero == numeroAdivinar) {
                
                var respuesta = "<h1 style='color: green;'>" + numero + " - ES EL CORRECTO!! </h1>";
                document.getElementById("Enviar").disabled=true;
                
            } else if(numero > numeroAdivinar) {

                var respuesta = (numero + " - El numero que buscas es inferior");
                
            } else if(numero < numeroAdivinar) {

                var respuesta = numero + " - El numero que buscas es superior";
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

 
