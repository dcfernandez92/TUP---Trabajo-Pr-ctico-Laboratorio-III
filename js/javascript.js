"use strict"

var preguntaActual;
var respuestasCorrectas;

// Oculta el botón "Comenzar" y renderiza la primer pregunta
function comenzarTrivia(){
	preguntaActual = 1;
	respuestasCorrectas = 0; 
	document.getElementById("comenzar").style.display = "none";
	document.getElementById("p"+preguntaActual).style.display = "block";
}

// Verifica si hay una nueva pregunta. 
// Si existe renderiza la nueva pregunta y oculta la anterior
// De lo contrario llama a la función verificarResultado()
function siguientePregunta(){	

	document.getElementById("p"+preguntaActual).style.display = "none";	
	preguntaActual++;
	if(preguntaActual <= 5){
		document.getElementById("p"+preguntaActual).style.display = "block";		
	}
	else{
		document.getElementById("secCalificacion").style.display = "block";

		verificarResultado();
	}		
}

// Cuenta las preguntas que se respondieron correctamente
function verificarResultado(){
	
	var i = 1;	
	var j = 0;
	var pregunta = document.getElementsByTagName("input");
	var caja = document.getElementById("resultadoTrivia");	
	var respuestaPregunta = [];


	/*for(j=0;j < respuestaPregunta.length;j++){
		respuestaPregunta[j] = null;
	}*/
	
	for(i in pregunta){
		if(pregunta[i].checked == true)	  	
	  		if(pregunta[i].value == "correcta"){
	    		respuestasCorrectas++;
	    		respuestaPregunta[j] = "B";
	    		j++;
	    	}
	    	else{
	    		respuestaPregunta[j] = "M";
	    		j++;
	    	}	    
	}

	
	var resultadoTotal = (respuestasCorrectas * 100) / 5;
	var mostrarPorcentaje = document.createElement("p");
	mostrarPorcentaje.setAttribute("id", "porcentaje");
	mostrarPorcentaje.innerHTML = resultadoTotal + "%";
	caja.appendChild(mostrarPorcentaje);
	
	var botonVerMas = document.createElement("input");
	botonVerMas.setAttribute("type", "button");	
	botonVerMas.setAttribute("value", "Ver mas");

	caja.appendChild(botonVerMas);

	var botonVerMenos = document.createElement("input");
	botonVerMenos.setAttribute("type", "button");	
	botonVerMenos.setAttribute("value", "Ver menos");

	caja.appendChild(botonVerMenos);
	botonVerMas.style.display = "block";
	botonVerMenos.style.display = "none";

	var caja2 = document.createElement("div");
	caja2.setAttribute("id","mostrarResPreguntas");
	caja.appendChild(caja2);		
	
	botonVerMas.onclick = function(){ 

		botonVerMas.style.display = "none";
		botonVerMenos.style.display = "block";
		
		
		var nuevo;
		for(var i=0; i<respuestaPregunta.length;i++){					
			if(respuestaPregunta[i] == "B"){							
				nuevo = document.createElement("div");
				nuevo.setAttribute("class","respuestaOK");
				nuevo.innerHTML = "Pregunta " + (i+1);
				caja2.appendChild(nuevo);
			}
			else{				
				nuevo = document.createElement("div");
				nuevo.setAttribute("class","respuestaNOK");
				nuevo.innerHTML = "Pregunta " + (i+1);
				caja2.appendChild(nuevo);
			}					
		}
	}

	botonVerMenos.onclick = function(){ 
		botonVerMenos.style.display = "none";
		botonVerMas.style.display = "block";		
		caja2.innerHTML = "";
	}
	
	document.getElementById("reintentar").style.display = "block";
	
}

function reintentarTrivia(){

	document.getElementById("secCalificacion").style.display = "none";
	document.getElementById("reintentar").style.display = "none";
	document.getElementById("resultadoTrivia").innerHTML = "";
	document.getElementById("comenzar").style.display = "block";
}