'use strict'

/**
 * Que nos diga que si un numero es par y impar
 * ventana prompt
 * si no es valido que nos pida de nuevo el numero 
 */

 var number = parseInt(prompt('Introduce un numero',0));

 while(isNaN(number)){
   number = parseInt(prompt('Introduce un numero',0));
 }

 if(number % 2 == 0){
   alert("Es un numero par");
 }else{
   alert("ES impart");
 }