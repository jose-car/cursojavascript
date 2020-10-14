'use strict'

//Bom - Browser Object Model
function getBom(){

  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location)
}

function redirect(url){
  window.location.href = url;
}

function abrirventana(url){
  window.open(url, " ", "wid")
}

getBom();
