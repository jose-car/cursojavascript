'use strict'

var numero = parseInt(prompt('¿De que numero quieres la tabla' , 1));
document.write( "<h1>Tabla de multiplicar "+numero+"</h1>" );
for(var i = 1; i <= 10; i++){
  document.write(i+" X  " + numero + " = " + (i*numero)+ "<br/>" );
}

for(var c = 1; c <= 10; c++){
document.write( "<h1>Tabla  "+c+"</h1>" );
for(var i = 1; i <= 10; i++){
  document.write(i+" X  " + c + " = " + (i*c)+ "<br/>" );
 }
}