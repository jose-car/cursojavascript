'use strict'

/*
1. pida 6 numeros y los meta en pantalla
2. mmostrar el array entero en el cuerpo de la pagina y la consola 
3. array ordenado y mostralo.
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos de array 
6. busqueda de valor introducido
*/
function mostrarArray(elementos, textoCustom = ""){
  document.write("<h1>Contenido del array"+ textoCustom + "</h1>");
  document.write("<ul>");
  elementos.forEach((elemento, index) => {
        document.write("<strong>" + elemento + "</strong><br/>")
  });
  document.write("<ul>")
}

//var numeros = new Array(6);
var numeros = [];
for(var i = 0; i <= 5; i++){
   //numeros[i] = (prompt("Introduce un numero", 0));
   numeros.push(parseInt(prompt("Introduce un numero", 0)));
  }
//Mostaren e cuerpo de la pagina 
mostrarArray(numeros);

//Mostrar el array por la consola  
console.log(numeros);

//Ordenar y mostrar

numeros.sort(function(a,b){
  return a-b
});
mostrarArray(numeros, 'ordenado');

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, 'reventir');

//Cuantos elementos 
document.write("<h1>El array tiene : "+numeros.length+ "elementos");

//Busqueda

var busqueda =  parseInt(prompt("Busca un numero", 0));

var posicion = numeros.findIndex( numero => numero ==  busqueda);

if(posicion && posicion != -1){
  document.write("<h1>Encontrado</h1>")
  document.write("<h1>Posicion de la busqueda:" +posicion+"</h1>")

}else{
  document.write("<h1>No Encontrado</h1>")
}

