

console.log(miNombre);

var miNombre = "Diego";

//Retorna un undefined

//Como no tiene una inicializacion
//Al momento de compilarlo en runtime
//Supone javaScript que es una variable
//Entonces genera una nueva variable 
//var miNombre = undefined;

//------------------------------------------------

//Las variables y las funciones se procesan antes de ejecutar cualquier codigo
//Pero las funciones se declaran antes que las variables
hey();

function hey(){
    console.log("Hola");
}
