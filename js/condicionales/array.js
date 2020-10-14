'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Josep";
var nombres = ["Josep", "PEPE", "Joseluis"];

var lenguajes = new Array("Java", "PHP", "C#");
/*
var elemento = parseInt(prompt("¿Que es elemento array", 0));
if(elemento >= nombres.length){
  alert("Introduce el numero correcto menor que " + nombre.length);
}else{
  alert("El usuario seleccionado es:"+nombres[elemento]);
}
alert(nombres[elemento]);
*/

document.write("<h1>Lenguajes de programacion</h1>");
document.write("</ul>");
/*
for(var i = 0; i <  lenguajes.length; i++){
  document.write("<li>"+lenguajes[i]+"</li>");  
}
*/

lenguajes.forEach((elemento, indece, arr)=>{
  console.log(arr);
   document.write("<li>"+indece +" - "+elemento +"</li>");

});

for(let lenguaje in lenguajes){
  document.write("<li>"+ lenguajes[lenguaje] +"</li>");

}

document.write("</ul>");

//Busqueda 

var precios = [10,20,30,40];
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");
var busqueda = precios.some(precio => precio >= 80);
console.log(busqueda);
