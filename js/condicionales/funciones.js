'use strict'

//Funciones 
//Funcion es una agrupacion reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){
  console.log("Suma: " + (numero1+numero2));
  console.log("Resta: " + (numero1-numero2));
  console.log("Multiplicacion: " + (numero1*numero2));
  console.log("Division: " + (numero1/numero2));
  console.log("******************************************")

}
function porPantalla(numero1, numero2){
  document.write("Suma: " + (numero1+numero2)+"<br/>");
  document.write("Resta: " + (numero1-numero2)+"<br/>");
  document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
  document.write("Division: " + (numero1/numero2)+"<br/>");
  document.write("******************************************"+"<br/>")


}

//DEfino de funciones
function calculadora(numero1, numero2, mostrar = false){   
   if(mostrar == false){
     porConsola(numero1, numero2);
    //console.log("si soy yo")
  
   }else{
     porPantalla(numero1, numero2); 
   
   }
  return true;
}

calculadora(1,4);
calculadora(2,5, true);
calculadora(4,5, true);
/*
for(var i = 1; i <= 10; i++){
calculadora(i, 8);
console.log(i, 8);
}
*/

//console.log(calculadora(),calculadora());
