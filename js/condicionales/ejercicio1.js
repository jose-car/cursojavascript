'use strict'

/**
 * programa que pida dos numeros y que nos diga cual es el mayor, menor y si son iguales
 * plus si los numeros no son un numero o son menores o iguales a cero nos los vuelva a pedir
 */

 var numero1 = parseInt(prompt('introduce el primero numero', 0));
 var numero2 = parseInt(prompt('introduce el segundo numero', 0));

 while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
   numero1 = parseInt(prompt('introduce el primero numero', 0));
   numero2 = parseInt(prompt('introduce el segundo numero', 0));

 }

 if (numero1 == numero2){
   alert("Los numeros son iguales");

 }else if(numero1 > numero2){
   alert("El Numero mayor es:" + numero1);
   alert("El Numero menor es:" + numero2);
 }else if(numero2 > numero1){
  alert("El Numero mayor es:" + numero2);
  alert("El Numero menor es:" + numero1);
   
 }else{
   alert("introduce numeros correctos");
 }