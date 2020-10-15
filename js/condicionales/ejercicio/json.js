'use strict'

//Json - javascript object notation

var pelicula = {
  titulo: "Batman",
  year: 2018,
  pais: "Mexico"
};

var peliculas = [
  {titulo: "La verdad duele", year: 2016, pais:"mexico"},
  pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas){
  var p = document.createElement("p");
  p.append(peliculas[index].titulo +  " - " + peliculas[index].year);
  caja_peliculas.append(p);
}
