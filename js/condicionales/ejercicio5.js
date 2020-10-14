'use strict'

/**
 * Muestre todos los programas devisores de un numero introduce promt
 */

 var numero = parseInt(prompt("Mete un numero", 1));

 for(var i = 1; i <= numero; i++){

   if(numero%i == 0){
   
    console.log("Divisor:" + i);
   }


 }