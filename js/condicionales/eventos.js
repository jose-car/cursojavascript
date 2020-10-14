'use strict'

//Eventos del raton   

window.addEventListener('load', () => {

function cambiarColor(){
  console.log("Me has dado un click");
  var bg = boton.style.background;

  if(bg == "green"){
    boton.style.background = "red";
  
  }else{
    boton.style.background = "green";
  }

  boton.style.padding = "10px";
  boton.style.border = "1px solic #ccc";
  
  return true;
}

var boton = document.querySelector("#boton")

//Click
boton.addEventListener('click', function(){
    cambiarColor();
});

//Mouse over 
boton.addEventListener('mouseover', function(){
  boton.style.background = "yellow";
});

//Mouseout
boton.addEventListener('mouseout', function(){
  boton.style.background = "#ccc";
});

//Focus
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', function(){
 console.log("Estas dentro del input");
});

//Blur

input.addEventListener('blur', function(){
 console.log("[blur]Estas fuera del input");
});

//Keydown
input.addEventListener('keydown', function(event){
  console.log("[keydown] Pulsando esta tecla", String.fromCharCode(event.KeyCode));
 });

 //Keypress
 input.addEventListener('keypress', function(event){
  console.log("[keypress] Teclado presionado", String.fromCharCode(event.KeyCode));
 });

 //Keyup
 input.addEventListener('keyup', function(event){
  console.log("[keyup] Tecla soltada", String.fromCharCode(event.KeyCode));
 });

});