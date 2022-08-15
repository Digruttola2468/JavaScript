
// Declarativas
function miFuncion() {
    return 3;
}
miFuncion();

function saludar(saludo){
    console.log(`Hola ${saludo}`);
}

// Expresion
var miExpresion = function(){
    return "Nombre";
}
miExpresion();

//Expresion con parametros
var miExpresionParam = function(a,b){
    return a + b;
}
miExpresionParam(19,20);

/*
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no.
Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas,
podemos mandar llamar la función antes de que ésta sea declarada,
y con la expresión de función, no, tendríamos que declararla primero,
y después mandarla llamar.

Hoisting significa que podemos llamar a una funcion y definirla mas abajo
*/