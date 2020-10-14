'use strict'

//Dom - Document Object Model
function cambiaColor(color){
  caja.style.background = color;
}
//Conseguir elemento con id en concreto
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2"

//Conseguir elementos por su etiqueta 
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

   var valor;
  for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
      var parrafo = document.createElement("p");
      var texto = document.createTextNode(todosLosDivs[valor].textContent);
      parrafo.append(texto);
      seccion.append(parrafo);
    }
  }
  seccion.append(hr);

//conseguir elementos

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarrillos = document.getElementsByClassName('amarillo');
divsAmarrillos[0].style.background = "yellow";


var div;
for(div in divsRojos){
  if(divsRojos[div].className == "rojo"){
    divsRojos[div].style.background = "red";
  }
}

//Query selector 

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);


var etiqueta = document.querySelector("div");
console.log(etiqueta);
