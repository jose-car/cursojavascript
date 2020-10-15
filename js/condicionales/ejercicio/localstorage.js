'use strict'

//localstorage


//Comprobar disponibilidad del localstorge
if(typeof(Storage) !== "undefined"){
  console.log("Localstorage disponible");
}else{
  console.log("Incompatible de localstorage")
}

//Guardar datos 
localStorage.setItem("titulo", "cursos javascrit");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos
var usuario = {
  nombre: "josep",
  email:  "josepcarmona000@gmail.com",
  web: "google.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto

 var userjs =  JSON.parse(localStorage.getItem("usuario"));
 
 console.log(userjs);
document.querySelector("#datos").append(userjs.web+" - " +userjs
.nombre);

localStorage.clear();










