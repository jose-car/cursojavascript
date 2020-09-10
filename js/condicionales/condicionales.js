'use strict'

//Condicionales if
//Si a es igual a  B entonces haz algo 

//si pasa esto ejecuta esto
var edad = 19;
var nombre = "Josep";
/*
//Operadores relacionales 
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <= 
Igual: ==
Distinto: != 
*/

if(edad >= 18){
  //Es mayor de edad 
  console.log(nombre + "Tiene" + edad + "años, es mayor de edad");
   
    if(edad <= 33){
      console.log('Todavia eres millenial');
    }else if(edad >= 70) {
      console.log('eres anciano');
    }else{
      console.log('Ya no eres millenial')
    }

}else{
//Es menor de edad 
     console.log(nombre + "Tiene" + edad + "años, es menor de edad");

}

/*
  //Operadores logicos 
  AND(Y): &&
  OR(O): ||
  Negacion: !
*/

//Negacion
var year = 2018;
if(year != 2016){
  console.log("El año no es 2016 realmente es: " + year);
}

//AND
if(year >= 2000 && year <= 2000){
   console.log("Estamos en la era actual");
}else{
  console.log("EStamos en la era moderna")
}

//OR
if(year == 2008 || (year >= 2018 && year == 2028)){
  console.log("El año acaba en 8");
}else{
  console.log("Año no registrado");
}



