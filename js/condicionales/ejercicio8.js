'use strict'

/**
 * una calculadora 
 * que pida los numeros por pantalla
 * si metemos uno mal que nos lo vuelva a pedir 
 * en el cuerpo de la pagina una alerta y por consola e resultado de sumar restar y multiplocar 
 */

 var numero1 = parseInt(prompt('Introducir un numero ' , 0));
 var numero2 = parseInt(prompt('Introducir un segundo ' , 0));

 while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
   numero1 = parseInt(prompt('Introducir el primer numero', 0));
   numero2 = parseInt(prompt('Introducir el primer numero', 0));
 }

 var resultado = "La suma es:" +(numero1+numero2)+"<br/>"+
                 "La resta es:"+(numero1-numero2)+"<br/>"+
                 "La Multiplicacion:"+(numero1*numero2)+"<br/>"+
                 "La division:"+(numero1/numero2)+"<br/>";
                 
 var resultadoCMD = "La suma es:" +(numero1+numero2)+"\n"+
                 "La resta es:"+(numero1-numero2)+"\n"+
                 "La Multiplicacion:"+(numero1*numero2)+"\n"+
                 "La division:"+(numero1/numero2)+"\n";

document.write(resultado);
alert(resultadoCMD);
